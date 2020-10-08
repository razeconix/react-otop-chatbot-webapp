const router = require('express').Router();
let Product = require('../models/Product');


router.route('/').get((req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//add product
  router.route('/add').post((req, res) => {
    const product_name = req.body.product_name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    const img = req.body.img;
  
    const newProduct = new Product({
        product_name,
        description,
        price,
        category,
        img,
    });
  
    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  }); //end add product

  //id
  router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(() => res.json('Product deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
      .then(products => {
        products.product_name = req.body.product_name;
        products.description = req.body.description;
        products.price = req.body.price;
        products.category = req.body.category;
        products.img = req.body.img;
        products.save()
          .then(() => res.json('Product updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });





  module.exports = router;