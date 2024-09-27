const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieReleaseDate = document.querySelector('.userInputReleaseDate');
const movieReleaseDateToDisplay = document.querySelector('.favouriteMovieReleaseDate');


let titleInputStorage = localStorage.getItem('title');
let releaseDateInputStorage = localStorage.getItem('releaseDate');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if (titleInputStorage && imageUrlInStorage && releaseDateInputStorage) {
    movieTitleToDisplay.textContent = titleInputStorage;
    movieReleaseDateToDisplay.textContent = releaseDateInputStorage;
    container.style.backgroundImage = `linear-gradient(rgb(51, 51, 82, 0.685), rgb(73, 49, 49, 0.582)),url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieReleaseDateInput = movieReleaseDate.value;
    let posterUrlInput = moviePosterUrl.value;

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('releaseDate', movieReleaseDateInput);
    localStorage.setItem('imageUrl', posterUrlInput);

    movieTitleToDisplay.textContent = movieTitleInput;
    movieReleaseDateToDisplay.textContent = movieReleaseDateInput;

    container.style.backgroundImage = `linear-gradient(rgb(51, 51, 82, 0.685), rgb(73, 49, 49, 0.582)),
        url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseDate.value = '';
});
