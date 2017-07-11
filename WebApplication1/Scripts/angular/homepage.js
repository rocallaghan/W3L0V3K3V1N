// Define the 'storeDetailApp' 
var kevinfoleyapp = angular.module('kevinfoleyApp', ['ui.bootstrap', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ngSanitize', 'ui.select', 'angular-advanced-searchbox', 'xeditable']);

// Define the `PhoneListController` controller on the `phonecatApp` module
kevinfoleyapp.controller('HomePageController', function HomePageController($scope, $http, $timeout, $window, $filter) {


    $scope.AnimateKevsHead = function () {
        var elem = document.getElementById("myAnimation");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }



    $scope.init = function () {
        $scope.AnimateKevsHead();

    }

});