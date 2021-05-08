/// <reference path="angular.js" />

var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        var mobiles = [
            { brand: "Samsung", likes: 0, dislikes: 0 },
            { brand: "Xiaomi", likes: 0, dislikes: 0 },
            { brand: "Nokia", likes: 0, dislikes: 0 }
        ];

        $scope.mobiles = mobiles;
        $scope.likeIncrement = function (mobile) {
            mobile.likes++;
        };

        $scope.disLikeIncrement = function (mobile) {
            mobile.likes++;
        };

    });