const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route
 */
router.get('/', (req, res) => {

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
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;