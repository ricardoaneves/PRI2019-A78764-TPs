const mongoose = require('mongoose');

var publicationSchema = new mongoose.Schema({

    type: {type: String, required: true},
    id: {type: String, required: true, unique: true},
    authors: [String],
    editors: [String],
    title: String,
    chapter: String,
    school: String,
    howpublished: String,
    journal: String,
    publisher: String,
    issn: String,
    booktitle: String,
    address: String,
    year: String,
    month: String,  
    volume: String,
    doi: String,
    isbn: String,
    pages: String

});

module.exports = mongoose.model('publications', publicationSchema);