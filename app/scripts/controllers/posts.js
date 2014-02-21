'use strict';

app.controller('PostsCtrl', function ($scope, Post, $location) {
    $scope.post = {url: 'http://'};
    $scope.posts = Post.all;

    $scope.submitPost = function () {
        Post.create($scope.post).then(function (ref) {
            $scope.post = {url: 'http://', title: '', upvotes: 0};
            $location.path('/posts/' + ref.name());
        });
    };

    $scope.deletePost = function (postId) {
        Post.delete(postId);
    };

    $scope.upvote = function (postId) {
        Post.update(postId);
    }


});