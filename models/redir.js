const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const redirSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required : true
    }
})

const Redirect = mongoose.model("Redirect", redirSchema);
module.exports = Redirect;