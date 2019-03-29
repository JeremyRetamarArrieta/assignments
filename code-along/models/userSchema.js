const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    userImg: String,
    birthday: Date,
    firstName: String,
    lastName: String,
    email: String,
    likedPosts: [{
        type: Schema.Types.ObjectId,
        ref: "Post", 
        default: []
    }],
    votedFor: [{
        type: Schema.Types.ObjectId,
        ref: "Post",
        default: []
    }]

})


userSchema.pre("save", function(next){
    const user = this
    if (!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})
// checkpassword method
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}
// withoutPassword method
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}


module.exports = mongoose.model("User", userSchema)