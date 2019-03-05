const express = require('express');
const router = express.Router();

router.get('/intro', (req, res) => res.render('../views/Introduction/introduction'));


module.exports = router;