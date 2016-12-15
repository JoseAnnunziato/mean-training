module.exports = function () {
    var mongoose = require("mongoose");
    var ProductSchema = mongoose.Schema({
        name: String,
        created: {type: Date, default: Date.now},
        lessons: [{type: mongoose.Schema.Types.ObjectId, ref:"LessonModel"}],
        embeddedLessons: [
            {
                name: String,
                lessonNumber: Number,
                description: String
            }
        ]
    }, {collection: "product"});
    return ProductSchema;
};