(function (angular) {
  'use strict';

  angular
    .module('haloAPI', [])
    .provider('HaloAPI', function() {

      var settings = {};

      settings.apiBase = "https://www.haloapi.com";

      //settings.authToken = null;
      settings.authToken = "f8b8aec44ec549978c9f2a6c11c848ca";

      this.setAuthToken = function(authToken) {
        settings.authToken = authToken;
      };

      this.$get = ['$q', '$http', function($q, $http) {

        function NgHaloAPI() {
          this.apiBase = settings.apiBase;
          this.authToken = settings.authToken;
        }

        NgHaloAPI.prototype = {

          api: function(endpoint, method, data, headers) {
            var deferred = $q.defer();
            $http({
              url: this.apiBase + endpoint,
              method: method ? method : 'GET',
              data: data,
              headers: headers
            })
              .success(function (data) {
                deferred.resolve(data);
              })
              .error(function (data) {
                deferred.reject(data);
              });
            console.log("Deferred element", deferred);
            return deferred.promise;
          },

          _auth: function() {
            var auth = {
              //'Accept' : 'application/xml',
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Key': this.authToken,
              'Authorization' : this.authToken,
            }
            console.log("Generating auth", auth, this.authToken);
            return auth;
          },

          /**
           ============ Matches ============
           */

          getPlayerMatches: function(player) {
            return this.api('/stats/h5/players/' + player + '/matches', 'GET', null, this._auth());
          },

          /**
           ============ Settings ============
           */

          setAuthToken: function(authToken) {
            this.authToken = authToken;
            return this.authToken;
          }

        };

        return new NgHaloAPI();

      }];

    });

})(angular);
