const findMostFilms = (movies, mostList)=>{
  let mostMovies = [];
  if(mostList === 'TopRatedFilmsList'){
    mostMovies = movies.slice().sort(function (aComparedData, bComparedData) {
      if (aComparedData.total_rating< bComparedData.total_rating) {
        return 1;
      }
      if (aComparedData.total_rating> bComparedData.total_rating) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
  }else{
    mostMovies = movies.slice().sort(function (aComparedData, bComparedData) {
      if (aComparedData.comments.length< bComparedData.comments.length) {
        return 1;
      }
      if (aComparedData.comments.length> bComparedData.comments.length) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
  }

  const mostMoviesList = mostMovies.slice(0,2);
  return mostMoviesList;
}

export {findMostFilms};