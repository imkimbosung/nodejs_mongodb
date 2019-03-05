const express = require('express');
const router = express.Router();

router.get('/cm', (req, res) => res.render('../views/Community/community'));


module.exports = router;