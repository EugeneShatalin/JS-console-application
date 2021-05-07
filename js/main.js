"use strict"

let numberOfFilm = prompt('How many movies have you watched so far?')

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let oneLastMovis1 = prompt('One of the last movies you watched?')
let appraisalOne = prompt('How much would you rate it?')

personalMovieDB.movies[`${oneLastMovis1}`] = appraisalOne

let oneLastMovis2 = prompt('One of the last movies you watched?')
let appraisalTwo = prompt('How much would you rate it?')

personalMovieDB.movies[`${oneLastMovis2}`] = appraisalTwo

console.log(personalMovieDB.movies)