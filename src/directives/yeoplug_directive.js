(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name yeoplugModule.directive:yeoplug
     * @scope
     * @restrict E
     *
     * @description
     * Description of the directive yeoplug
     * 
     * @example
       <example module="yeoplugModule">
           <file name="index.html">
               AngularJS directive sample
               <data-yeoplug></data-yeoplug>
           </file>
           <file name="script.js">
               angular.module('yeoplugModule', []);
           </file>
       </example>
     */
    angular
        .module('appModule')
        .directive('yeoplug', function() {

            return {
                template: '<div></div>',
                restrict: 'E',
                link: function postLink(scope, element, attrs) {
                    element.text('this is the yeoplug directive');
                }
            };
        });

})();
