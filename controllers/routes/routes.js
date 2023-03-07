
const routeControllers = require('../routeController')
const express = require('express');

const router = express.Router()

/* GET ROUTES */
router.get('/add-user', routeControllers.add_user_get);
router.get('/delete-user', routeControllers.delete_user_get);
router.get('/update-user', routeControllers.update_user_get);
router.get('/read-all-users', routeControllers.read_all_users_get);
router.get('/change-username', routeControllers.change_username_get);
router.get('/change-password', routeControllers.change_pw_get);

/* POST ROUTES */
router.post('/add-user', routeControllers.add_user_post);
router.post('/change-username', routeControllers.update_username_post);
router.post('/change-password', routeControllers.update_password_post);

/* ID ROUTES */ 
router.get('/:id', routeControllers.see_all_users_by_id);

/* DELETE ROUTES */
router.delete('/delete-user', routeControllers.delete_user);

/* EXPORT THE ROUTES */
module.exports = router;