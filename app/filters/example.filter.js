/**
 * @ngdoc filter
 * @name exampleFilter
 * @description 
 * 
 * Filtro de ejemplo
 * 
 */
(function() {
    'use strict';

    angular
        .module('devion-stack-angular')
        .filter('filter', example);

    function example() {
        return exampleFilter;

        ////////////////

        function exampleFilter(params) {
            return params;
        }
    }

})();