var mongoose = require('mongoose'),
    Product = mongoose.model('Product');
    Cart = mongoose.model('Cart');


    module.exports = {
        index: (req, res) => {
            //if(!req.sessionID){
                //console.log("Created Session ID:", req.sessionID)
            //}
            //else {
                //console.log("SessionID already exists:",req.sessionID)
            //}
            var user = 1;
            Product.find({}, (err, products) => {
                if (err) {
                    console.log(err);
                    res.status(400).json(err.errors)
                }
                else {
                    //console.log(products)
                    res.json(products);
                }
            });
        },
    
        create: (req, res) => {
            console.log("Entered server")
            var product = new Product({
                name: req.body.name, 
                description: req.body.desc,
                price: req.body.price,
                quanity: req.body.quanity,
                category: req.body.category,
                img1: req.body.img1,
                search: req.body.search
            });
            product.save((err, product) => {
                if (err) {
                    console.log('Something went wrong', err.message);
                    res.json(err.errors);
                }
                else {
                    console.log('Successfully added an author!', product);
                }
            });
        },
    
        show: (req, res) => {
            Product.findById({_id: req.params.id}, (err, product) => {
                if(err) {
                    console.log('Something went wrong', err);
                    res.json(err.errors);
                }
                else {
                    res.json(product);
                }
            })
            
        },
    
      getTools: (req, res) => {
        Product.find({ category: "tools & tech"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getBestsellers: (req, res) => {
        Product.find({ category: "bestsellers"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getNew: (req, res) => {
        Product.find({ category: "new"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getSolars: (req, res) => {
        Product.find({ category: "solar-powered"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getU20s: (req, res) => {
        Product.find({ category: "u20"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getWindups: (req, res) => {
        Product.find({ category: "wind-up"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      createCart: (req, res) => {
            var cart = new Cart({
                userID: 1
            });
            cart.save((err, product) => {
                if (err) {
                    console.log('Something went wrong', err.message);
                    res.json(err.errors);
                }
                else {
                    console.log('Successfully added an author!', product);
                }
            });
      },

      addToCart: (req, res) => {
        //console.log("Server")
        //Product.findById({_id: req.params.id},(err, product) => {
            //Product.create(product, (err, data) => {
                //console.log("This is data: ", data);
                //Cart.find({status: "use"}, (err, cart) => {
                    //cart.push(product);
                    //console.log("This is cart: ",cart)
                //})
            //})      
        //})
        //console.log("Inside: ",req.body.quanity)
        var user = 1;
        var productId = req.body._id;
        Cart.find({userID: user}, (err, found) => {
            var duplicateCheck = found[0].items[0].name;
            console.log("Found:",duplicateCheck)
            if(duplicateCheck == req.body.name) {
                console.log("Matched!")
                Cart.update({userID: user},
                    {$inc: {
                        items: {
                            quanity: req.body.quanity
                        }
                    }
                });
            }
            else {
                console.log("Not Matched",req.body.name)
                Cart.update({
                userID: user},
                { $set: { userID: user },
                $push: {
                    items: {
                        _id: productId,
                        name: req.body.name,
                        description: req.body.description,
                        price: req.body.price,
                        image: req.body.images[0],
                        category: req.body.category,
                        quanity: req.body.quanity
                        }
                    }
                }, (err, cart) => {
                    console.log("THIS IS CART: ", cart);
                    console.log("THIS IS ERROR: ", err);
        });
            }
        })
        
    },

    getCart: (req, res) => {
        var user = 1;
        Cart.find({userID: user}, (err, cart) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log("This is cart: ", cart)
                res.json(cart[0].items);
            }
        });
    },

    search: (req, res) => {
        //console.log("Search in server",req.body)
        var searchTerm = req.body.input.toLowerCase();
        console.log("Seaching: ", searchTerm);
        Product.find({search: searchTerm}, (err, search) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log("Found:",search)
                res.json(search)
            }
        })
    },

    addReview: (req, res) => {
        console.log("Review:",req.body)
        console.log("Review ID:",req.params.id)
        Product.findByIdAndUpdate({_id: req.params.id},
            {$push:
            {reviews: 
                {
                    name: req.body.name,
                    rating: req.body.rating,
                    review: req.body.review
            }}}, (err, review) => {
                if(err) {
                    console.timeLog(err)
                }
                else {
                    console.log("Successfully added review:", review)
                }
            }
        );
    },

    submitOrder: (req, res) => {
        var user = 1;
        Cart.update({userID: user}, 
            {$set: {items: []}}, (err, product) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Successfully deleted")
            }
        })
    },
    
    deleteFromCart: (req, res) => {
        var user = 1;
        console.log("deleteFromCart:",req.body)
        Cart.update(
            {userID: user},
            {$pull: {"items": {_id: req.params.id}}}, (err, deleted) => {
                if(err) {
                    console.log(err)
                }
                else {
                    console.log("Successfully deleted")
                }
            }
        );
    }
}
    
    