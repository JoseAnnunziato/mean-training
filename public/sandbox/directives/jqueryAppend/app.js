(function () {
    angular
        .module('DirectiveDemoApp', [])
        .directive('loremIpsum', loremIpsumDir);
    
    function loremIpsumDir() {

        function linkFunction(scope, element, attrs) {
            element.append("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s");
            element.css('display', 'block');
            element.css('margin-bottom', '10px');
        }

        return {
            link: linkFunction
        };
    }
})();