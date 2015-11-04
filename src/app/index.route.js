(function() {
  'use strict';

  angular
    .module('haloland')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeVM'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
