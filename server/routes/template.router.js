const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT "wishlist"."id", "bio", "needs", "family_members", "username" FROM "wishlist"
    JOIN "user" ON "user"."id" = "wishlist"."user_id";`
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


router.delete('/wishlist/:id', (req, res) => {
    const queryText = `DELETE FROM "wishlist" WHERE "wishlist"."id"=$1;`
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