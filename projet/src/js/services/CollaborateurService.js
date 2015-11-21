app.factory('Collaborateur', function($http) {
  var promise;
  var Collaborateur = {
    findAll: function() {
      if ( !promise ) {
		//valeur de retour promise (on peut metre .then apres ) 
        promise = $http.get("http://localhost:8090/collaborateurs/findAll").then(function (response) {
          // Test Console
          console.log(response);
          // la valeur de retour sera reccuperé par le controller a travers Then()
          return response.data;
        });
      }
      // Retourner la Promise
      return promise;
    }
  };
  return Collaborateur;
});