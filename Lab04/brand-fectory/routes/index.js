const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

/* Route for Nike */
router.get('/nike', (req, res, next) => {
  res.render('nike', { title: 'Nike' });
});

/* Route for Adidas */
router.get('/adidas', (req, res, next) => {
  res.render('adidas', { title: 'Adidas' });
});

/* Route for ASICS */
router.get('/asics', (req, res, next) => {
  res.render('asics', { title: 'ASICS' });
});

/* Route for Puma */
router.get('/puma', (req, res, next) => {
  res.render('puma', { title: 'Puma' });
});

// Add routes for other brands or individuals as needed

module.exports = router;
