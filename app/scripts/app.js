'use strict';
/* global app:true */

var app = angular.module('angNewsApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'firebase'
    ]).constant('FIREBASE_URL' , 'https://toonverbeek.firebaseio.com/')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .when('/posts/:postId', {
                templateUrl: 'views/showpost.html',
                controller: 'PostViewCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
