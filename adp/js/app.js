(function () {

angular.module('adpApp',['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap']);



angular.module('adpApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/dashboard');

  // Set up UI states
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'template/dashboard.html',
      controller:'uploadedFilesController'
    })

    .state('help', {
      url: '/help',
      templateUrl: 'template/help.html'
    });
}


})();
