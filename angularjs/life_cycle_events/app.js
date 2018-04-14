angular.module('myApp', [])
    .component('myComponent', {
        template: '<h1>{{ $ctrl.text }}</h1>',
        controller: function() {
            this.$onInit = function() {
                this.text = 'Component';
            }
        }
    });

