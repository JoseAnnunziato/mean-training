(function() {
    angular
        .module("ProductApp")
        .factory("LessonService", LessonService);

    function LessonService($http) {
        var api = {
            findLessonsByProductId: findLessonsByProductId,
            createLessonForProduct: createLessonForProduct
        };
        return api;

        function createLessonForProduct(productId, lesson) {
            return $http.post("/api/product/"+productId+"/lesson", lesson);
        }

        function findLessonsByProductId(productId) {
            return $http.get("/api/product/"+productId+"/lesson");
        }
    }
})();