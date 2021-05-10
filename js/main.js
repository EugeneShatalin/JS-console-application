"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let oneLastMovis = prompt('Один из последних просмотренных фильмов?');
            let appraisal = prompt('На сколько оцените его?');
            if (oneLastMovis !== '' && appraisal !== '' && oneLastMovis !== null && appraisal !== null && oneLastMovis.length <= 50) {
                personalMovieDB.movies[`${oneLastMovis}`] = appraisal;
            } else {
                i--
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов.')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель.')
        } else {
            alert('Вы киноман')
        }
    },
    showMyDB: function (privatParamDB) {
        if (!privatParamDB) {
            console.log(privatParamDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i}`);
            if (answer === null || answer === '') {
                i--
            } else {
                personalMovieDB.genres.push(answer);
            }
        }
        personalMovieDB.genres.forEach((v, i) => console.log(`Любимый жанр ${i + 1} - это ${v}`))
    },
    toggleVisibleMyDB: function () {
        return this.privat = !this.privat
    }
};