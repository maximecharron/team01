'use strict';

// Declare app level module which depends on views, and components
var homeApp = angular.module('uMovie', [
    'ngRoute',
    'ngResource',
    'oblador.lazytube',
    'slickCarousel',
    'uMovie.movie',
    'uMovie.tvshow',
    'uMovie.actor',
    "uMovie.search"
]);

