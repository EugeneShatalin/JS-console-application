"use strict"

let numberOfFilm = +prompt('How many movies have you watched so far?');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let oneLastMovis = prompt('One of the last movies you watched?');
    let appraisal = prompt('How much would you rate it?');
    if (oneLastMovis !== '' && appraisal !== '' && oneLastMovis !== null && appraisal !== null && oneLastMovis.length <= 50) {
        personalMovieDB.movies[`${oneLastMovis}`] = appraisal;
    } else {
        i--
    }
}

if (personalMovieDB.count < 10) {
    alert('Quite a few movies watched.')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('You are a classic spectator')
} else {
    alert('You are a movie fan')
}