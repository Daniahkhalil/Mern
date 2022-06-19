const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: " Hello to our product"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price,description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

