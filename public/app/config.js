(function(){
    angular
        .module("WebApp")
        .config(configuration);
    
    function configuration($routeProvider) {
        $routeProvider
            .when('/website', {
                templateUrl: 'websites/templates/website-list.view.client.html',
                controller: 'websiteListController',
                controllerAs: 'websiteListModel'
            })
            .when('/website/:wid', {
                templateUrl: 'websites/templates/website-edit.view.client.html'
            });
    }
})();