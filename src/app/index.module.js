(function() {
  'use strict';

  angular
    .module('haloland', [
      'haloland.general',
      'haloAPI',
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngMessages',
      'ngAria',
      'ui.router',
      'toastr'
    ]);

  /**
   * Callback Modules
   */

  angular.module('haloland.general', [
    'haloland.general.controllers'
  ]);

  angular.module('haloland.general.controllers', []);

})();
