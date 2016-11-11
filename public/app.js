(function() {
    angular
        .module("BlogApp", [])
        .controller("PostController", PostController);

    function PostController($scope, $http) {

        function init() {
            getAllPosts();
        }
        init();

        function getAllPosts() {
            $http
                .get("/api/blogpost")
                .success(function(posts){
                    $scope.posts = posts;
                });
        }

        $scope.createPost = function (post) {
            $http
                .post("/api/blogpost", post)
                .success(getAllPosts)
        };
    }
})();