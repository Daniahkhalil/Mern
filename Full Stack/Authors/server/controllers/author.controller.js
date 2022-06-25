const Book = require('../models/book.model');
module.exports = {
    create: (request, response) => {
        const { title, pages } = request.body;
        Book.create({
            title,
            pages
        })
            .then(book => response.json(book))
            .catch(err => response.status(400).json(err))
    }
}

