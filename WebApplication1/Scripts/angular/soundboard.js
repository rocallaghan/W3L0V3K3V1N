// Define the 'storeDetailApp' 
var kevinfoleyapp = angular.module('kevinfoleyApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
kevinfoleyapp.controller('SoundBoardController', function SoundBoardController($scope, $http, $timeout, $window, $filter) {


    $scope.playAudio = function () {
        var audio = new Audio('/assets/soundclips/deez_nuts.mp3');
        audio.play();
    }

    $scope.init = function () {

    }



})