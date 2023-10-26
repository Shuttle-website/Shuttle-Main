const router = require('express').Router();

const NewArrivalController = require('../controllers/newArrivalController');

// send all product details
router.route('/').get(NewArrivalController.getAllProducts);

// send a single product
router.route('/:id').get(NewArrivalController.getSingleProduct);

// create product review
router.route('/reviews').post(NewArrivalController.createProductReview);

// send all product reviews
router.route('/reviews/:id').get(NewArrivalController.getAllReviews);

module.exports = router;
