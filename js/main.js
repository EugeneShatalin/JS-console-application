"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let oneLastMovis = prompt('Один из последних просмотренных фильмов?');
        let appraisal = prompt('На сколько оцените его?');
        if (oneLastMovis !== '' && appraisal !== '' && oneLastMovis !== null && appraisal !== null && oneLastMovis.length <= 50) {
            personalMovieDB.movies[`${oneLastMovis}`] = appraisal;
        } else {
            i--
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов.')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель.')
    } else {
        alert('Вы киноман')
    }
}

detectPersonalLevel();

function showMyDB(privatParamDB) {
    if (!privatParamDB) {
        console.log(privatParamDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();