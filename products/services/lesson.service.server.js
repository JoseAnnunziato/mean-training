module.exports = function (app, model) {
    app.get("/api/product/:productId/lesson", findLessonsByProductId);
    app.post("/api/product/:productId/lesson", createLessonForProduct);

    lessonModel = model.lessonModel;

    function createLessonForProduct(req, res) {
        var productId = req.params.productId;
        var lesson = req.body;
        lessonModel
            .createLessonForProduct(productId, lesson)
            .then(function (lesson) {
                res.json(lesson);
            });
    }
    
    function findLessonsByProductId(req, res) {
        var productId = req.params.productId;
        lessonModel
            .findLessonsByProductId(productId)
            .then(function (lessons) {
                res.json(lessons);
            });
    }
};