const router = require('express').Router();
const adminController = require('../controllers/adminController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

const newArrivalController = require('../controllers/newArrivalController');
const auth = require('../middleware/Auth');

router.route('/auth').post(adminController.sendCurrentUser);

// register new admin
router
  .route('/register')
  .post(
    auth.checkAdminPrivileges('super'),
    adminController.registerAdmin
  );

// login admin
router.route('/login').post(adminController.loginAdmin);

// logout admin
router.route('/logout').get(adminController.logoutAdmin);

// get all admin details
router
  .route('/users')
  .get(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('super'),
    adminController.getAllAdminDetails
  );

// get single admin details
router
  .route('/users/:id')
  .get(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('super'),
    adminController.getSingleAdminDetails
  )
  .put(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('super'),
    adminController.updateAdminPrivilege
  )
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('super'),
    adminController.deleteAdmin
  );

// create a new product
router
  .route('/product/new')
  .post(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super', 'low'),
    productController.createProduct
  );
  
// send, update, delete a single product
router
  .route('/product/:id')
  .put(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super'),
    productController.updateProduct
  )
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super'),
    productController.deleteProduct
  );

// delete product reviews
router
  .route('/product/review/:id')
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super'),
    productController.deleteReview
  );

// new Arrival

// create a new product
router
  .route('/create/newArrival')
  .post(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super', 'low'),
    newArrivalController.createProduct
  );
  
// send, update, delete a single product
router
  .route('/newArrival/:id')
  .put(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super'),
    newArrivalController.updateProduct
  )
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super'),
    newArrivalController.deleteProduct
  );

// delete product reviews
router
  .route('/newArrival/review/:id')
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super'),
    newArrivalController.deleteReview
  );

// send all orders
router
  .route('/orders')
  .get(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super', 'low'),
    orderController.getAllOrders
  );

// send single order
router
  .route('/order/:id')
  .put(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super', 'low'),
    orderController.updateOrderStatus
  )
  .delete(
    auth.checkUserAuthentication,
    auth.checkAdminPrivileges('moderate', 'super'),
    orderController.deleteOrder
  );

module.exports = router;
