var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input your name."]
    },
    rating: {
        type: Number,
        required: [true, "Please provide a star rating."]
    },
    review: {
        type: String,
        minlength: [5, "Your review must contain at least 5 characters"]
    },
},
{timestamp: true});

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username."],
        minlength: [2, "Username must be at least 2 characters."]
    },
    firstname: {
        type: String,
        required: [true, "Please enter your first name."],
        minlength: [2, "First name must have at least 2 characters."]
    },
    lastname: {
        type: String,
        required: [true, "Please enter your last name."],
        minlength: [2, "Last name must be at least 2 characters."]
    },
    password: {
        type: String,
        required: [true, "Please enter a password."],
        minlength: [6, "Password must be at least 6 characters."]
    }
},
{timestamp: true});

var ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    images: [],
    search: [],
    reviews: [ReviewSchema]
    },
{timestamps: true});

var CartSchema = new mongoose.Schema ({
    userID: {
        type: Number
    },
    items: []
});

mongoose.model('Product', ProductSchema);
mongoose.model('Review', ReviewSchema);
mongoose.model('User', UserSchema);
mongoose.model('Cart', CartSchema);
