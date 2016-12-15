module.exports = function () {
    var mongoose = require("mongoose");
    var LessonSchema = mongoose.Schema({
        product: {type: mongoose.Schema.Types.ObjectId, ref:"ProductModel"},
        name: String,
        lessonNumber: Number,
        description: String
    });
    return LessonSchema;
};