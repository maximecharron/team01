actorApp.factory('actorResource', ["$resource", function($resource){
  return $resource("https://umovie-team01.herokuapp.com/unsecure/actors/:id",{},{
    get:{
      method:"GET",
      params:{
        id:"@id"
      }
    }
  });
}]);
