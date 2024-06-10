const userController = require('../../controllers/userController');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(userController.add).get(userController.all);

// router.route('/login').post(userController.login);
// router.route('/logout').get(userController.logout);

module.exports = router;
