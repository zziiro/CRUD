
const routeControllers = require('../routeController')
const express = require('express');

const router = express.Router()

/* GET ROUTES */
router.get('/add-user', routeControllers.user_added_confirmation_get);
router.get('/delete-user', routeControllers.user_deleted_confirmation_get);
router.get('/update-user', routeControllers.user_updated_confirmation_get);
router.get('/read-all-users', routeControllers.read_all_users_get);
router.get('/change-username', routeControllers.change_username_get);
router.get('/change-password', routeControllers.change_pw_get);

/* POST ROUTES */
router.post('/add-user', routeControllers.user_added_post);
router.post('/change-username', routeControllers.update_username_post);
router.post('/change-password', routeControllers.update_password_post);

/* PARAM ROUTES */


module.exports = router;