const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// res.send to res.render ( )

// Welcome Page
router.get('/', (req, res) => res.render('../views/loginPages/welcome'));

// Dashboard ( render 는 views 파일 안에 있는 파일이랑 연동)
router.get('/dashboard', ensureAuthenticated, (req, res) => 
  res.render('../views/loginPages/dashboard', {
      name: req.user.name
  }));

module.exports = router;