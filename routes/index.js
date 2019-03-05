const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// res.send to res.render ( )

// Home
router.get('/m', (req, res) => res.render('../views/welcome'));


// router.get('/', (req, res) => res.render('../src/index'));


// Dashboard ( render 는 views 파일 안에 있는 파일이랑 연동)
router.get('/afm', ensureAuthenticated, (req, res) => 
  res.render('../views/loginafter', {
      name: req.user.name
  }));

module.exports = router;