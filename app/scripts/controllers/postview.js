/**
 * Created by qynox on 2/21/14.
 */
'use strict';

app.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
    $scope.post = Post.find($routeParams.postId);

    $scope.comment = {user: '', comment: '' };
    $scope.comments = [{user: 'test', comment: 'why, hello there!'}];

    $scope.submitComment = function(){
        $scope.comments.push($scope.comment);
        $scope.comment = {user: '', comment: '' };
    }
});