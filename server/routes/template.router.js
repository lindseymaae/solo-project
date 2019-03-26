const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
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

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;