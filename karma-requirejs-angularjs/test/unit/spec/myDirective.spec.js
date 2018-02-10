'use strict';

define(['testApp'], function () { 

    describe('myDirective test', function() {
        var element, scope, $rootScope, $compile, $log;
        
        beforeEach(function() {
            module('testApp');
            inject(function(_$rootScope_, _$compile_, _$log_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
                $log = _$log_;
                scope = $rootScope.$new();
                scope.name = '';
                element = $compile('<my-directive></my-directive>')(scope);
                scope.$digest();
            });
        });
    
        it('should contain name', function() {
            expect(element.html()).toContain('name');
        });

        it('should log "inside myDirective"', function() { 
            expect($log.info.logs).toContain(['inside myDirective']);
        });

        it('should name be "jozef"', function() {
            expect(scope.name).toBe('jozef');
        });

        it('should change name to "BigDaddy" on button click', function() {
            element.find('button').triggerHandler('click');

            expect(scope.name).toBe('BigDaddy');
        });

    });

});