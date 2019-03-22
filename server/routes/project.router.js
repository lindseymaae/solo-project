const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route, gets products for inventory page
 */
router.get('/', (req, res) => {

    const queryText = `
    SELECT "products"."product_name", sum("products"."product_quantity"), "categories"."category", "seasons"."season",
        "products"."product_min_quantity", "products"."id" AS "product_id" FROM "products"
JOIN "categories" ON "products"."catergory_id" = "categories"."id"
JOIN "seasons" ON "products"."season_id" = "seasons"."id"
GROUP BY "product_id","product_name", "category", "season", "product_min_quantity" HAVING sum("products"."product_quantity") < "product_min_quantity" OR "product_min_quantity" IS NULL;`
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

router.get('/quantity', (req, res) => {
console.log(req.body);

    const queryText = `SELECT * FROM "products"
        JOIN "categories" ON "products"."catergory_id" = "categories"."id"
        JOIN "seasons" ON "products"."season_id" = "seasons"."id"`
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error completing SELECT item query', err);
            res.sendStatus(500);
        });
});




/**
 * POST route template, takes information from add new item page
 */

    router.post('/', (req, res) => {
        console.log(req.body);

        const newProduct = req.body;
        const queryText = 
        `INSERT INTO "products" ("product_name", "product_quantity", "catergory_id", "season_id")
        VALUES ($1, $2, $3, $4);`;
        const queryValues = [
            newProduct.name,
            newProduct.quantity,
            newProduct.category,
            newProduct.season
        ];

        pool.query(queryText, queryValues)
            .then(() => { res.sendStatus(201); })
            .catch((err) => {
                console.log('Error completing POST Project query', err);
                res.sendStatus(500);
            });
    });


//DELETE Route, takes item id and deletes from database
router.delete('/:id', (req, res) => {
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

module.exports = router;