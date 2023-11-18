# Flixx App used Fetch API

# TMDB Setup
    - Username
    - Password
    - API_KEY
    - API_TOKEN

# Page Router & Active Link
    - window.location.pathname

# Display Popular Movies (under this title 'MOVIE LISTS')
    - endpoint for data
    - api key required
        - api key
        - api url
        - fetch data
        - get the response
    - create a function that displays all popular movies
    - url (https://developer.themoviedb.org/reference/movie-popular-list)
    - endpoint (https://api.themoviedb.org/3/movie/popular)

# Spinner & Popular TV Shows (under this title 'TV SERIES LISTS')
    - add the Spinner Effect function
    - endpoint for data
    - change the api url
    - url (https://developer.themoviedb.org/reference/tv-series-popular-list)
    - endpoint (https://api.themoviedb.org/3/tv/popular)
    - dont forget to add the css and append it to the DOM
    - dont forget to add to the 'init function'
    - check the 'example response'

# Movie Details Page
    - In this case we need the 'movieID' and how to combine with 'window.location.search'
    - call it to the 'init function' and clg to see the id
    - response will be '?id=436270'
        - we need the 436270
        - use split the method to turn into array 
        - window.location.search.split('=')
        - response will be ['?id', '436270']
        - window.location.search.split('=')[1]
        - 436270
    - get the movie id now using fetchAPIData(`movie`/${moveId});
    - create an element (div)
    - div.innerHTML and take the 'html code' and paste here
    - append child
    - now inject the dynamic data
    - Take a look at the 'example response'
    - Care with the 'genre' because one movie can have multiple genre, will be an array, use 'map' method
        - create a li
        - return the 'name'
        - join the name
    - Budget, create a function for 'commas'
        - search on overflow for 'js function to add commas to a number'
        - add this function to the Budget
    - Production Companies, same procedure as 'genre'

# Details Page Backdrop
    - Create a function that displays the background image inside of 'displayMovieDetails()'
    - Takes two parameters

# TV Show Details Page
    -

# Swiper Slider
    -

# Search Functionality
    -

# Display Search Results
    -

# Add Pagination
    -

