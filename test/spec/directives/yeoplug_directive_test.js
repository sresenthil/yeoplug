  (function() {
      'use strict';

      describe('Directive:yeoplug', function() {
          describe('Test module and direcitive', function() {

              // load the module
              beforeEach(angular.mock.module('yeoplugModule'));

              var element,
                  scope;

              beforeEach(inject(function($rootScope) {
                  scope = $rootScope.$new();
              }));

              it('should make hidden element visible', inject(function($compile) {
                  element = angular.element('<data-yeoplug></data-yeoplug>');
                  element = $compile(element)(scope);
                  expect(element.text()).to.be.equal('this is the yeoplug directive');
              }));
          });
      });
  })();