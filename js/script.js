// Global Settings
const global = {
    currentPage: window.location.pathname,
};

// Swiper Slider
async function displaySlider(){
  const { results } = await fetchAPIData('movie/now_playing');
  console.log(results);
}

// Create function display popular movies
async function displayPopularMovies(){
    // Destructuring the data, results in this case
    const { results }  = await fetchAPIData('movie/popular');
    // Now lets render the HTML
    // Create the div
    // Add the CSS class
    // Edit the div using innerHTML
    // Inject dynamic data
    // Add it to the DOM
    results.forEach((movie)=>{
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
          ${
            movie.poster_path ? `<img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            class="card-img-top"
            alt="Movie Title"
          />` : `
          <img
          src="images/no-image.jpg"
          class="card-img-top"
          alt="Movie Title"
        />
          `
          }
        </a>
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            <small class="text-muted">Release: ${movie.release_date}</small>
          </p>
        </div>
        `;
        document.querySelector('#popular-movies').appendChild(div);
    })
    // Dont forget to call within the 'init function' for every loading
}

// Display most popular tv shows
// Change the endpoint here
// Create function display popular movies
async function displayPopularShows(){
    // Destructuring the data, results in this case
    const { results }  = await fetchAPIData('tv/popular');
    // Now lets render the HTML
    // Create the div
    // Add the CSS class
    // Edit the div using innerHTML
    // Inject dynamic data
    // Add it to the DOM
    results.forEach((show)=>{
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="tv-details.html?id=${show.id}">
          ${
            show.poster_path ? `<img
            src="https://image.tmdb.org/t/p/w500${show.poster_path}"
            class="card-img-top"
            alt=${show.name}
          />` : `
          <img
          src="images/no-image.jpg"
          class="card-img-top"
          alt=${show.name}
        />
          `
          }
        </a>
        <div class="card-body">
          <h5 class="card-title">${show.name}</h5>
          <p class="card-text">
            <small class="text-muted">Air Release: ${show.first_air_date}</small>
          </p>
        </div>
        `;
        document.querySelector('#popular-shows').appendChild(div);
    })
    // Dont forget to call within the 'init function' for every loading
}

// Display Movie Details
// We are going to work with money, so we need to add the ',' sign after the numbers, so lets create a function
function addCommasToNumbers (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// Now wrap the move.budget with this function


async function displayMovieDetails(){
  // Get the ID in the URL, in the window object is 'location' method
  const movieId = window.location.search.split('=')[1];
  console.log(movieId);
  // Output: ?id=926393, lets split, take the second value [0] - first value, [1] second value or the id that we want

  // Get the movieId now
  const movie = await fetchAPIData(`movie/${movieId}`);

  // Create an element
  const div = document.createElement('div');

  // Bring the 'html code' from 'movie-details.html'
  div.innerHTML = `
  <div class="details-top">
  <div>
  ${
    movie.poster_path ? `<img
    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    class="card-img-top"
    alt=${movie.title}
  />` : `
  <img
  src="images/no-image.jpg"
  class="card-img-top"
  alt=${movie.title}
/>
  `
  }
  </div>
  <div>
    <h2>${movie.title}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      <!-- Fixed the vote -->
      ${movie.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${movie.release_date}</p>
    <p>
      ${movie.overview}
    </p>
    <h5>Genres</h5>
    <!-- One movie can have multiple genres, we are goinf to use map because genres is an array of objects -->
    <ul class="list-group">
      ${movie.genres.map((genre)=>
        `<li>${genre.name}</li>`
      ).join('')}
    </ul>
    <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> $${addCommasToNumbers(movie.budget)}</li>
    <li><span class="text-secondary">Revenue:</span> $${addCommasToNumbers(movie.revenue)}</li>
    <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
    <li><span class="text-secondary">Status:</span> ${movie.status}</li>
  </ul>
  <h4>Production Companies</h4>
      ${movie.production_companies.map((company)=>
        `<span>${company.name}</span>`
      ).join('')}

  
</div>
  `;
  // Put it in the DOM
  document.querySelector('#movie-details').appendChild(div);
}

async function displayShowDetails(){
  // Get the ID in the URL, in the window object is 'location' method
  const showId = window.location.search.split('=')[1];
  console.log(showId);
  // Output: ?id=926393, lets split, take the second value [0] - first value, [1] second value or the id that we want

  // Get the showId now
  const show = await fetchAPIData(`tv/${showId}`);

  // Create an element
  const div = document.createElement('div');

  // Bring the 'html code' from 'tv-details.html'
  div.innerHTML = `
  <div class="details-top">
  <div>
  ${
    show.poster_path ? `<img
    src="https://image.tmdb.org/t/p/w500${show.poster_path}"
    class="card-img-top"
    alt=${show.title}
  />` : `
  <img
  src="images/no-image.jpg"
  class="card-img-top"
  alt=${show.name}
/>
  `
  }
  </div>
  <div>
    <h2>${show.name}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${show.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Air Date: ${show.last_air_date}</p>
    <p>
      ${show.overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
      ${show.genres.map((genre)=> `<li>${genre.name}</li>`).join('')}
    </ul>
    <a href="${show.homepage}" target="_blank" class="btn">Visit Show Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Show Info</h2>
  <ul>
    <li><span class="text-secondary">Number Of Episodes:</span> ${show.number_of_episodes}</li>
    <li>
      <span class="text-secondary">Last Episode To Air:</span> ${show.last_episode_to_air.name} 
    </li>
    <li><span class="text-secondary">Status:</span> ${show.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">
  ${show.production_companies.map((company)=> `<span>${company.name}</span>` )}
</div>
  `;
    // Put it in the DOM
    document.querySelector('#show-details').appendChild(div);
}

// Add it before make the request
function showSpinner(){
    // Display the div with spinner class, show or hide using CSS class
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner (){
    document.querySelector('.spinner').classList.remove('show')
}

// Fetch Data from TMDB API
// Take your key from .env file
async function fetchAPIData(endpoint) {
    const API_KEY = '922cdb31355d71ba2e65e4ff6ff074a8';
    const API_URL = 'https://api.themoviedb.org/3/';
    showSpinner();
    const response = await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-us`
        );

    // Data in JSON format
    const data = await response.json();
    hideSpinner();
    return data;
}


// Highlight active links
function highlightActiveLink(){
    // Get all the NavLinks
    const links = document.querySelectorAll('.nav-link');
    // Loop through and add yellow color
    links.forEach((link)=>{
        // Get attribute if its clicked and belongs to our global current page
        if(link.getAttribute('href') === global.currentPage ){
            link.classList.add('active');
            // Call to init function, global call
        }
    })
}

// Init App, which page run, simple router
function init (){
    switch(global.currentPage){
        // Multiple conditions
        case '/':
        case '/index.html':
            console.log('Home');
            displaySlider();
            displayPopularMovies();
            break;
        case '/shows':
        case '/shows.html':
            console.log('Shows');
            displayPopularShows();
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            displayMovieDetails();
            break;
        case '/tv-details.html':
            console.log('TV Details');
            displayShowDetails();
            break;
        case '/search.html':
            console.log('Search');
            break;
    }
    highlightActiveLink();
};

// Puting the init on document object

document.addEventListener('DOMContentLoaded', init);