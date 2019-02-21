var mongoose = require('mongoose'),
    //User = mongoose.model('User'),
    gidgets = require('../controllers/gidgets.js'),
    path = require('path');

    module.exports = (app) => {
        
        app.get('/gidget', gidgets.index);

        app.get('/gidget/:id', gidgets.show);

        app.post('/create', gidgets.create);
        
        // JSON product response by category
        app.get('/tools', gidgets.getTools);
        app.get('/bestsellers', gidgets.getBestsellers);
        app.get('/new', gidgets.getNew);
        app.get('/solars', gidgets.getSolars);
        app.get('/u20s', gidgets.getU20s);
        app.get('/tools', gidgets.getTools);
        app.get('/windups', gidgets.getWindups);

        // Shopping cart logic
        app.post('/addToCart/:id', gidgets.addToCart);
        app.get('/getCart', gidgets.getCart);
        app.get('/createCart', gidgets.createCart);
        app.get('/submitOrder', gidgets.submitOrder);
        app.post('/deleteitem/:id', gidgets.deleteFromCart)

        app.post('/searchQuery', gidgets.search);

        app.post('/addreview/:id', gidgets.addReview);

        app.all("*", (req, res, next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
    }
