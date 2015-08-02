angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.welcome = 'Hello World!';
    }]).directive('greeter', function() {
        return {
            template: window.parent.document.querySelector('#'+window.greeterTemplateId).innerHTML
        };
    });

angular.element(window.parent.document).ready(function() {
    angular.bootstrap(window.parent.document, ['myApp']);
});