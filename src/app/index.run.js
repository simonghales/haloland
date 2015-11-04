(function() {
  'use strict';

  angular
    .module('haloland')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
