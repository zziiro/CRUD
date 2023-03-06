
const userInformationModel = require('../model/userModel');

/* GET ROUTES */
const user_added_confirmation_get = (req, res) => {
    res.status(200).render('addUser');
}

const user_updated_confirmation_get = (req, res) => {
    res.status(200).render('updateUser');
}

const user_deleted_confirmation_get = (req, res) => {
    res.status(200).render('deleteUser');
}

const read_all_users_get = (req, res) => {
    res.status(200).render('readAllUsers');
}

const change_username_get = (req, res) => {
    res.status(200).render('changeUsername');
}

const change_pw_get = (req, res) => {
    res.status(200).render('changePassword');
}



/* POST ROUTES */
const user_added_post = (req, res) => {
    const userinformation = userInformationModel(req.body);
    
    userinformation.save()
    .then((result) => {
        res.status(200).render('index');
        console.log(`new user added: ${userinformation.name}`);
    })
    .catch((err) => {
        res.status(400);
        console.log(`[ERROR] User not added`);
        res.render('404');

    })
}


module.exports = {
    user_added_confirmation_get,
    user_updated_confirmation_get,
    user_deleted_confirmation_get,
    read_all_users_get,
    change_pw_get,
    change_username_get,
    user_added_post
}