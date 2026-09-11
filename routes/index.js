const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');

router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);
const menuController = require('../controllers/menuController');

router.get('/restaurants/:id/menu', menuController.getMenuByRestaurant);

const orderController = require('../controllers/orderController');

router.post('/orders', orderController.createOrder);

module.exports = router;