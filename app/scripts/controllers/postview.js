/**
 * Created by qynox on 2/21/14.
 */
'use strict';

app.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
    $scope.post = Post.find($routeParams.postId);
});