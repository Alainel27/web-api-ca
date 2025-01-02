import React from "react";
import { getSimilar } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

const SimilarPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('similar', getSimilar)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToPlaylist = (movieId) => true 

  return (
    <PageTemplate
      title="Similar Movies to Recommendations"
      movies={movies}
      action={(movie) => {
        return(
          <>
          <AddToFavoritesIcon movie={movie} />
          <AddToWatchlistIcon movie={movie} />
          </>
        ); 
      }}
    />
);
};
export default SimilarPage;