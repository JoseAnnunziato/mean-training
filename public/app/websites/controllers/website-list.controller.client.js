(function () {
    angular
        .module("WebApp")
        .controller('websiteListController', websiteListController);
    
    function websiteListController(WebsiteService) {
        var model = this;
        
        WebsiteService
            .findAllWebsites()
            .success(renderWebsites);

        function renderWebsites(websites) {
            model.websites = websites;
        }
    }
})();