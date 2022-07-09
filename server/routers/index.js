const express = require('express');
const router = express.Router();

/**
 *@route GET /test 
 *@desc GET to test whether the API is working or not 
 */
router.get('/test', (req, res) => {
  res.send('Hello boss!');
});

module.exports = router;
