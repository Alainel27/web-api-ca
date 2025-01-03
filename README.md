# Assignment 2 - Web API.

Name: Alan Zaharia

## Features.

Added UI for sign up and login

## Setup requirements.

Copy the contents of the folder

Navigate to movie-api

Write the command npm start

Create a new terminal and navigate to react-movies

Write the command npm start

The tmdb api key is taken into consideration

## API Configuration

movie-api .env
______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=YourMongoURL
seedDb=true
TMDB_KEY=<KEY>
SECRET=ilikecake
______________________

react-movies .env
______________________
REACT_APP_TMDB_KEY=<KEY>
FAST_REFRESH=false
______________________
## API Design

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/upcoming | GET | Get all upcoming movies
- /api/movies/genres | Get | Gets all genres

I tried to get top rated and popular but they did not work


## Security and Authentication


A user can sign up and log in. A user can allow sign out on the siteheader.

The favourites and watchlist is a protected route.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

I created a movie-api folder in the react-movies folder, which i used to call from the backend. The upcoming and genres are taken from the backend. Unfortunately the popular movies and top rated did not work. A update from the previous assignment would be the sign up and login.

## Independent learning (if relevant)

I learnt how to use textfield for better UI.
