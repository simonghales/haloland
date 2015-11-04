(function() {
  'use strict';

  angular
    .module('haloland.general.controllers')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, HaloAPI) {
    var vm = this;

    vm.getPlayer = getPlayer;

    activate();

    function activate() {
      $log.log("Activated");
      getPlayer();
    }

    //

    function getPlayer() {
      $log.log("Get player...");
      HaloAPI.getPlayerMatches("hajes");
    }

  }

})();
