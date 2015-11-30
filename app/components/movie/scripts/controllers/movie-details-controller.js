/**
 * Created by Antoine on 2015-09-14.
 */
movieApp.controller("movie-detail-controller", function ($scope, $rootScope, movieSelectionService, $routeParams, movieResource, movieCommentResource) {
    var movieId =  $routeParams.movieId;
    $scope.isLoading =false;

    $scope.initComment = function(){
      movieCommentResource.get({id:movieId}, function onSuccess(data){
        $scope.movieComments = data;
      }, function onError(data){

      });
    };


    $scope.initMovieDetail = function()
    {
        var selectedMovie = movieSelectionService.getSelectedMovie();

        if( Object.keys(selectedMovie).length === 0) {
            $scope.isLoading = true;
            movieResource.get({id:movieId}, function onSuccess(data){
                selectedMovie = data.results[0];

                $scope.movie = selectedMovie;
                $scope.isLoading = false;
            }, function onError(data){

            });
        }else{
            $scope.movie = selectedMovie;
        }

        $scope.initComment();
    };

    $scope.addComment = function(userComment)
    {
      var comment = {
        "username": $rootScope.user.username,
        "email": $rootScope.user.email,
        "id": movieId,
        "content": userComment
      }

      movieCommentResource.post(comment, function onSuccess(data){

        $scope.initComment();

      }, function onError(data){

      });
    }

    $scope.initMovieDetail();

    $scope.dismiss = function(){

    }

});
