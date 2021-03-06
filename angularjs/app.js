/**
 *    Angular JS by Google is a well-organized, well-tested, versatile, powerful and flexible JavaScript MVC framework
 *    It is best used (instead of plain jQuery) for building rich client-side HTML5 applications, fast, quick and bug-free
 *
 *    Below are simple concepts to familiarize yourself with the different features of angularjs:
 *
 *    MVC - model, view, controller
 *    2-way data binding - the ability to get the page to look the way you want without messing with the DOM
 *    Services - for sharing code between controllers
 *    Directives - this is the only place DOM manipulation is allowed
 *    Filters - quick search capability
 *    Modules - modularized pieces of functionality
 *    Configurations - as in this file is used to wire up the application and routing bit
 *
 *    You want something that separates business logic, data and how the data is presented
 *
 */
(function (angular) {
    'use strict';

    var ngModule = angular.module('codeKata', ['codeKata.SampleCtrl',
                                                'codeKata.sampleService',
                                                'codeKata.sampleDirectives',
                                                'codeKata.FibonacciCtrl',
                                                'codeKata.HomeCtrl',
                                                'codeKata.FizzBuzzCtrl',
                                                'codeKata.IntegerToEnglishCtrl',
                                                'ngRoute',
                                                'ngSanitize']),
        cacheBustSuffix = new Date().getTime();

    // configure routing
    ngModule.config(['$routeProvider', function ($routeProvider) {

        // default route:
        $routeProvider.when('/sample', {templateUrl: 'angularjs/sample/sample.html?cache-bust=' + cacheBustSuffix, controller: 'SampleCtrl'});
        $routeProvider.when('/fibonacci', {templateUrl: 'angularjs/fibonacci/fibonacci.html?cache-bust=' + cacheBustSuffix, controller: 'FibonacciCtrl'});
        $routeProvider.when('/home', {templateUrl: 'angularjs/home/home.html?cache-bust=' + cacheBustSuffix, controller: 'HomeCtrl'});
        $routeProvider.when('/fizzBuzz', {templateUrl: 'angularjs/fizzBuzz/fizzBuzz.html?cache-bust=' + cacheBustSuffix, controller: 'FizzBuzzCtrl'});
        $routeProvider.when('/phrase', {templateUrl: 'angularjs/integerToEnglish/integerToEnglish.html?cache-bust=' + cacheBustSuffix, controller: 'IntegerToEnglishCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

}(window.angular));