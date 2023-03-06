
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = ({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userInformationModel = mongoose.model('user', userSchema);

module.exports = userInformationModel;