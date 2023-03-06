
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
        res.status(500);
        console.log(`[ERROR] User not added: ${err}`);
        res.render('addUser');

    })
}

const update_username_post = (req, res) => {
    const userinformation = userInformationModel(req.body);
    const usernameOld = { username : req.body.oldUsername};
    const usernameNew = { $set: { username: req.body.username }};

    userInformationModel.updateOne(usernameOld, usernameNew)
    .then((result) => {
        res.status(200).render('index');
        console.log(`Username updated: ${req.body.oldUsername} -> ${req.body.username}`);
    })
    .catch((err) => {
        res.status(500).render('changeUsername');
        console.log(`[ERROR] Username not updated: ${err}`);
    })

}

const update_password_post = (req, res) => {
    const userinformation = userInformationModel(req.body);
    const passwordOld = { password: req.body.oldPassword }
    const passwordNew = { $set: { password: req.body.password }};

    userInformationModel.updateOne(passwordOld, passwordNew)
    .then((result) => {
        res.status(200).render('index');
        console.log(`Username password: ${req.body.oldPassword} -> ${req.body.password}`);
    })
    .catch((err) => {
        res.status(500).render('changePassword');
        console.log(`[ERROR] Password not updated: ${err}`);
    })
}


module.exports = {
    user_added_confirmation_get,
    user_updated_confirmation_get,
    user_deleted_confirmation_get,
    read_all_users_get,
    change_pw_get,
    change_username_get,
    user_added_post,
    update_username_post,
    update_password_post
}