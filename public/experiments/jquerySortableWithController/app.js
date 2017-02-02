(function () {
    angular
        .module('DirectiveDemoApp', [])
        .controller('sortableController', sortableController)
        .directive('hmhSortable', hmhSortable);
    
    function sortableController($scope) {
        $scope.items = [
            {label: 'Item 1'},
            {label: 'Item 2'},
            {label: 'Item 3'}
        ];
    }
    
    function hmhSortable() {

        function controller($scope) {
            console.log($scope);
            this.stop = function (event, ui) {
                console.log(event);
                console.log(ui);
            }
        }

        function linkFunction(scope, element, attrs, controller) {
            var collection = scope.collection;
            var startIndex = -1;
            var stopIndex  = -1;
            element.sortable({
                start: function (event, ui) {
                    startIndex = ui.item.index();
                },
                stop: function (event, ui) {
                    // controller.stop(event, ui);
                    console.log(collection);
                    stopIndex = ui.item.index();
                    console.log([startIndex,stopIndex]);
                    collection.splice(stopIndex, 0, collection.splice(startIndex, 1)[0]);
                    console.log(collection);
                }
            });
        }

        return {
            link: linkFunction,
            controller: controller,
            scope: {
                collection: '='
            }
        };
    }
})();