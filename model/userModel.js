
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = ({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },

    /* FOR UPDATING USER INFORMATION */
    oldUsername: {
        $type: String
    },
    oldPassword: {
        $type: String
    }
    
});

const userInformationModel = mongoose.model('user', userSchema);

module.exports = userInformationModel;