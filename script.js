// http://www.omdbapi.com/?i=tt3896198&apikey=4ff0a6d3
// when we search in input, get the value and add click listener and masukin the value into the fetch API, then render 
// data with the template html
const movieEl = document.getElementById('movie-input')
const searchBtn = document.getElementById('search-btn')
const main = document.querySelector('main')

searchBtn.addEventListener('click', function(){
    fetch(`http://www.omdbapi.com/?s=${movieEl.value}&apikey=4ff0a6d3`)
    .then(response => response.json())
    .then(data => {
        console.log(data.Search[0])
        renderMovies(data.Search)
    })
})


function renderMovies(data){
    let html_template = ''
    data.forEach(function(d){
        html_template += `
        <div class="movie-container">
            <img src="${d.Poster}" alt="">
            <div class="movie-details">
                <h1>${d.Title}</h1>
                <div class="movie-type">
                    <p>test</p>
                    <p></p>
                    <button></button>
                </div>
                <p></p>
            </div>
        </div>
        `
    })

    main.innerHTML = html_template
}


