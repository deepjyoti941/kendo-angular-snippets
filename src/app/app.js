(function () {
   'use strict';

   // Create the module and define its dependencies.
   var app = angular.module('app', [
      // Angular modules
      'ngRoute',           // routing

      // Custom modules

      // 3rd Party Modules
      'kendo.directives'
   ]);

   // config always runs before the services are ready.
   // basically the first thing our module does.
   app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
         .when('/', { templateUrl: 'app/select-multiselect/select-multiselect.html' })
         .when('/datasource', { templateUrl: 'app/dataSource/dataSource.html' })
         .when('/global-events', { templateUrl: 'app/globalEvents/globalEvents.html' })

         .otherwise({ redirectTo: '/' }); // go to the welcome page
   }
   ]);

})();