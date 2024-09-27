const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieReleaseYear = document.querySelector('.userInputReleaseYear');
const movieReleaseYearToDisplay = document.querySelector('.favouriteMovieReleaseYear');


let titleInputStorage = localStorage.getItem('title');
let releaseYearInputStorage = localStorage.getItem('releaseYear');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if (titleInputStorage && imageUrlInStorage && releaseYearInputStorage) {
    movieTitleToDisplay.textContent = titleInputStorage;
    movieReleaseYearToDisplay.textContent = releaseYearInputStorage;
    container.style.backgroundImage = `linear-gradient(rgb(51, 51, 82, 0.685), rgb(73, 49, 49, 0.582)),url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieReleaseYearInput = movieReleaseYear.value;
    let posterUrlInput = moviePosterUrl.value;

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('releaseYear', movieReleaseYearInput);
    localStorage.setItem('imageUrl', posterUrlInput);

    movieTitleToDisplay.textContent = movieTitleInput;
    movieReleaseYearToDisplay.textContent = movieReleaseYearInput;

    container.style.backgroundImage = `linear-gradient(rgb(51, 51, 82, 0.685), rgb(73, 49, 49, 0.582)),
        url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseYear.value = '';
});
