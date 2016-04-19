(function() {
  var app = angular.module('teamInfo-directives', []);
  app.directive('teamInfo', function() {
    return {
      restrict: 'E',
      templateUrl: 'team-info/team-info.html'
    };
  });

  app.directive('teamLogo', function(){
    return {
      restrict: 'E',
      templateUrl: 'team-info/team-logo.html'
    };
  });
})();
