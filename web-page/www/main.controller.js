(function(angular){
  var app = angular.module("bh2017");

  app.controller("MainController", MainController);

  function MainController($http) {
    var ctrl = this;

    $http({
      method: 'GET',
      url: 'data/propositions.json'
    })
    .then(function(response){
      ctrl.propositions = response.data;
    });
  }
})(angular);
