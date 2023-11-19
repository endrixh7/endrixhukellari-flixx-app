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
    - Takes two parameters because we need to know if its 'movie' or 'tv' shows
        - First will be 'movie' or 'tv'
        - Second will be the backdrop path from the API endpoint 'movie.backdrop_path'
    - Now create that function on Details Page
        - Again two parameters
            - first will be 'type'
            - second will be 'backgroundPath'
        - Now create the element(div)
        - Style the div by adding 'backgroundImage'
            - Our div will be url with the image path from the TMDB API and the backgoundPath
            - Adding these styles
    - Last thing we need to see what the type need to be
        - if is movie go to movie details + id
        - if is shows go to show details + id
        - dont forget to append the div

# TV Show Details Page
    - Create a function that fetch data from TV show endpoint
    - Cut/Paste all the HTML code from tv-details.html
    - Inject the dynamic data
    - append to the DOM
    - call the function to 'init' function

# Swiper Slider
    - Swiper is a JS Library for carousel images
    - Cut the Swiper code and we are going to implement through the JS
    - Fetch the Data
    - Data is an array
    - Loop through using forEach method
        - create the div
        - add the Swiper class
        - Create the Html, paste the code that we took before
        - Inject the dynamic data now
    - Append it to the DOM
    - init the Swiper here to ()
    - Call the function inside of 'init' function

    - Now we are going to work with the Swiper configurations ()
        - Create a function to initialize the Swiper object
        - Add the configurations the we need
        - We have to work with the breakpoints for the responsivenes
            - Try to make the browser smaller
    - We can create one for the TV Shows

# Search Functionality - Part 1 (under this title 'https://developer.themoviedb.org/reference/search-tv')
    - url (https://developer.themoviedb.org/reference/search-tv)
    - Before we start lets take a look on the HTML Form
        - name
        - type
    - Create a function 'search()' 
    - Now lets get data from the url
        - First we need 'the query string' (everything from the ? mark)
        - Second 'query param'
        - How to get these data by separating each other
            - Using URLSearchParams, this accept the query string inside (FormDataAPI)
                - '.get()' method 
    - Recommended to put in the Global Scope
        - Create a 'search' object with some values:
            - term
            - type
            - page (for pagination, set 1 by default)
            - totalPages (set 1 by default)
        - Go to 'Search' function
            - Set the global object for 'type' and 'term' (from HTML Form) 
    - Set an alert if the Search is left empty
        - if and else
            - alert prompt (We can create a custom alert)
                - show alert function with two params
                    - add CSS Class
                - hide alert function
            - add it to the DOM
            - set a timeout and remove because will stay to the DOM
    - Let make the request and display results
        - set the API_KEY on the global state
        - set the API_URL on the global state
    - Make the request
        - change the values on the response url
            - add 'search/${global.search.type}' (radio button hold this information)
            - add API_KEY
            - add language
            - query
            - page will be added later for the pagination
    - Call it to the 'init' function
    - clg the response
        - array
        - total_pages
        - total_results
    - Now lets add data to the DOM

# Display Search Results - Part 2
    - Now that we created the structure for the API Request lets render the HTML
        - First, destructure the Array {results, total_pages, page}
        - Now we are going to use results
        - Check if the array is 0 and display the alert, return
        - If the array has data create a function 'displaySearchResults(results)'
        - Clear input after search is submitted
    - Now lets create the 'displaySearchResults' functionality
        - Loop through and display data
        - Easy way, copy the displayPopularMovies() and paste in the 'displaySearchResults' function
            - Instead of the 'movie' param change it to 'result'
            - At the 'img' pass the global variable - ${global.search.type}
            - At 'alt' check for the 'type' (movie or tv) and set the result.name or result.title
            - Same at movie.title
            - At release date - result.release_date or result.first_air_date
            - Append it to the DOM (#search-results)
            - Gotcha at img - missing / and result.poster_path

# Add Pagination
    - Add a heading to display total results
    
    - Add pagination through the JS
    


