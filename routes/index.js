const express = require('express');
const router = express.Router();

// res.send to res.render ( )
router.get('/', (req, res) => res.render('Welcome'));

module.exports = router;