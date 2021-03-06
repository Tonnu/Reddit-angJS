/**
 * Created by qynox on 2/21/14.
 */
'use strict';

app.controller('NavCtrl', function ($scope, $location, Post) {
    $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function () {
        Post.create($scope.post).then(function (ref) {
            $location.path('/posts/' + ref.name());
            $scope.post = {url: 'http://', title: ''};
        });
    };
});