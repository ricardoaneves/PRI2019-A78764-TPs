var Publication = require('../models/publications');

// Devolve a lista de publicações apenas com os campos "id", "title", "year" e "type"
module.exports.find = () => {
    return Publication
        .find({}, {_id:0, id:1, title:1, type:1, year:1})
        .exec()
};

// Devolve a informação completa de uma publicação
module.exports.findByID = id => {
    return Publication
        .find({id:id})
        .exec()
};

// Devolve a lista de tipos, sem repetições
module.exports.findTypes = () => {
    return Publication
        .find({}, {type:1})
        .distinct('type')
        .exec()
};

// Devolve a lista de publicações que tenham o campo "type" com o valor "YYY"
module.exports.findByType = type => {
    return Publication
        .find({type:type})
        .exec()
};

// Devolve a lista de publicações que tenham o campo "type" com o valor "YYY" e o campo "year" com um valor superior a "AAAA"
module.exports.findByTypeAndYear = (type, year) => {
    return Publication 
        .aggregate([{$match: {type:type}}, {$match: {year: {$gt: year}}}])
        .exec()
};

// Devolve uma lista ordenada alfabeticamente com os nome dos autores
module.exports.findAuthors = () => {
    return Publication
        .aggregate([{$unwind: "$authors"}, {$project: {_id:0, authors:1}}, {$sort: {authors:1}}])
        .exec()
};

// Devolve uma lista com as publicações do autor
module.exports.findByAuthor = author => {
    return Publication
        .find({authors: author})
        .exec()
}