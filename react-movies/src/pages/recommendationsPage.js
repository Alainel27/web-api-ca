import React from "react";
import { getRecommendations } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


const RecommendationsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('recommendations', getRecommendations)

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
      title="Recommendations"
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
export default RecommendationsPage;