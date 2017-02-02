(function () {
    angular
        .module('WebApp')
        .factory('WebsiteService', websiteService);
    
    function websiteService($http) {

        var api = {
            "findAllWebsites": findAllWebsites
        };
        return api;

        function findAllWebsites() {
            return $http.get("/api/website");
        }
    }
})();