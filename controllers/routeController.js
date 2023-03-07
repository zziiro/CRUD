
const userInformationModel = require('../model/userModel');

/* GET ROUTES */
const add_user_get = (req, res) => {
    res.status(200).render('addUser');
}

const update_user_get = (req, res) => {
    res.status(200).render('updateUser');
}

const delete_user_get = (req, res) => {
    res.status(200).render('deleteUser');
}
const change_username_get = (req, res) => {
    res.status(200).render('./updateViews/changeUsername');
}

const change_pw_get = (req, res) => {
    res.status(200).render('./updateViews/changePassword');
}

const read_all_users_get = (req, res) => {
    userInformationModel.find()
    .then((result) => {
        res.render('readAllUsers', {
            users: result
        })
    })
    .catch((err) => {
        res.status(400).render('404');
        console.log(`[ERROR] Users not found: ${err}`);
    })
}



/* POST ROUTES */
const add_user_post = (req, res) => {
    const userinformation = userInformationModel(req.body);
    
    userinformation.save()
    .then((result) => {
        res.status(200).render('index');
        console.log(`new user added: ${req.body.name}`);
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
        res.status(500).render('./updateViews/changeUsername');
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
        res.status(500).render('./updateViews/changePassword');
        console.log(`[ERROR] Password not updated: ${err}`);
    })
}


/*  ID ROUTES */
const see_all_users_by_id = (req, res) => {
    const id = req.params.id;

    userInformationModel.findById(id)
    .then((result) => {
        res.render('deleteSingleUser', {
            user: result
        })
    })
    .catch((err) => {
        res.status(404).render('404')
        console.log(`[ERROR] There has been an error getting the user: ${err}`);
    })
}

/* DELETE ROUTES */
const delete_user = (req, res) => {
    console.log('In delete_user method');
    
    userInformationModel.deleteOne( { name: req.body.name })
    .then((result) => {
        res.status(200).render('Index');
        console.log(`User with the name (${name}) has been deleted..`);
    })
    .catch((err) => {
        res.status(500);
        console.log(`User with the name (${name}) has not been deleted..`);
    })
    
}

/* MODULE EXPORTS */
module.exports = {
    add_user_get,
    update_user_get,
    delete_user_get,
    read_all_users_get,
    change_pw_get,
    change_username_get,
    add_user_post,
    update_username_post,
    update_password_post,
    delete_user,
    see_all_users_by_id
}