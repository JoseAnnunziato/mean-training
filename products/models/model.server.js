module.exports = function () {
    var mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost/hmh');

    var productModel = require("./product/product.model.server")();
    var lessonModel = require("./lesson/lesson.model.server")();

    var model = {
        productModel: productModel,
        lessonModel: lessonModel
    };
    return model;
};