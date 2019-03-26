const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
/**
 * GET route, gets products for inventory page
 */
router.get('/', rejectUnauthenticated,  (req, res) => {

    const queryText = `SELECT "products"."id", "products"."product_name", "products"."product_quantity", "seasons"."season", "categories"."category"  FROM "products"
        JOIN "categories" ON "products"."catergory_id" = "categories"."id"
        JOIN "seasons" ON "products"."season_id" = "seasons"."id"`;
    pool.query(queryText)
        .then((response) => {
            console.log(response.rows[0]);
            
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error completing SELECT item query', err);
            res.sendStatus(500);
        });
});

router.get('/quantity',  (req, res) => {
console.log('THIS IS GETTING HIT');

    const queryText = `SELECT * FROM "products" WHERE "products"."product_quantity" < "products"."product_min_quantity" OR "products"."product_min_quantity" IS NULL`
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
            console.log('This is my quantity GET', response.rows);
            
        })
        .catch((err) => {
            console.log('Error completing SELECT item query', err);
            res.sendStatus(500);
        });
});




/**
 * POST route template, takes information from add new item page
 */

    router.post('/', rejectUnauthenticated, (req, res) => {
        console.log(req.body);

        const newProduct = req.body;
        const queryText = `SELECT * FROM "products" WHERE "products"."product_name" = $1`;

        const queryValues = [
            newProduct.name
        ];

        pool.query(queryText, queryValues)
            .then((results) => { 

                if(results.rows.length != 0){
                    console.log('Needs to be updated: ', results.rows[0])
                    const foundQueryString =   `UPDATE "products" 
                                                SET "product_quantity" = "products"."product_quantity" + $2 
                                                WHERE "products"."product_name" = $1`;

                    pool.query(foundQueryString, [newProduct.name,
                        newProduct.quantity]).then(() => {
                            console.log(`Updated ${newProduct.name}`)
                            res.sendStatus(204);
                        }).catch(err => {

                        })
                }else {
                    const {
                        name, quantity, season, category
                    } = req.body;
                    const foundQueryString = `INSERT INTO "products" ("product_name", "product_quantity", "catergory_id", "season_id") values ($1, $2, $3, $4)`;

                    pool.query(foundQueryString, [name, quantity, category, season]).then(() => {
                        console.log('Succesfully posted');
                        res.sendStatus(204);
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
            .catch((err) => {
                console.log('Error completing POST Project query', err);
                res.sendStatus(500);
            });
    });


//DELETE Route, takes item id and deletes from database
router.delete('/quantity/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `DELETE FROM "products" WHERE "id"=$1;`
    const queryValues = [
        req.params.id
    ];
    console.log('req.params.id', queryValues);

    pool.query(queryText, queryValues)

        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('Error completing DELETE query', error);
            res.sendStatus(500);
        });

});

router.post('/profile', rejectUnauthenticated, (req, res) => {
    console.log('PROFILE', req.body);
    const newProfile = req.body; 
    const queryText = `INSERT INTO "wishlist" ("user_id", "family_members", "bio", "needs") VALUES ($1, $2, $3, $4)`
    const queryValues = [
        req.body.user,
        req.body.familySize,
        req.body.bio,
        req.body.needs,
    ]
    console.log('WTF', queryValues);
    

    pool.query(queryText, queryValues)
        .then(() => { 
            res.sendStatus(201)
        }).catch(err => {
    console.log(err)
})
})
router.get('/profile', (req, res) => {
    const queryText = `SELECT * FROM "wishlist"`
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
            console.log('This is my profile GET', response.rows);

        })
        .catch((err) => {
            console.log('Error completing SELECT item query', err);
            res.sendStatus(500);
        });
});

module.exports = router;