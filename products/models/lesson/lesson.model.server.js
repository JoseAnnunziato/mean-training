module.exports = function () {
    var mongoose = require("mongoose");
    var LessonSchema = require("./lesson.schema.server")();
    var LessonModel = mongoose.model("LessonModel", LessonSchema);

    var api = {
        createLessonForProduct: createLessonForProduct,
        findLessonsByProductId: findLessonsByProductId,
        findLesson: findLesson,
        deleteLesson: deleteLesson,
        updateLesson: updateLesson
    };
    return api;
    
    function updateLesson() {
        
    }

    function createLessonForProduct(productId, lesson) {
        lesson.product = productId;
        return LessonModel
            .create(lesson)
    }
    
    function findLesson() {
        
    }
    
    function findLessonsByProductId(productId) {
        return LessonModel.find({product: productId});
        // var lessons  = [
        //     {name: "lesson 123"},
        //     {name: "lesson 234"}
        // ];
    }
    
    function deleteLesson() {
        
    }
};