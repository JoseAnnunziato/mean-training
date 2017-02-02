(function(){
    angular
        .module('DirectiveDemoApp', [])
        .directive('loremIpsum', lorem)
        .directive('hmhColor', hmhColor);

    function hmhColor() {
        function colorLinkFunction(scope, element, attrs) {
            element.css('color', attrs.hmhColor);
        }
        return {
            link: colorLinkFunction
        };
    }
    
    function lorem() {
        function linkFunction(scope, element) {
            element.css('display', 'block');
            element.css('margin-bottom', '10px');
        }
        return {
            template: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: linkFunction
        };
    }
})();