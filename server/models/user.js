var mongoose = require('mongoose')

User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1,
        unique: true
    }
})
module.exports = { User }