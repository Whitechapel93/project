"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function showMyDB () {
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    } 
}


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
           b = +prompt('На сколько его оцениваете','');
     
         if (a != null && b != null && a !='' && b != '' && a.length < 50 && b != NaN) {
             personalMovieDB.movies[a] = b
             console.log('Done');
         } else {
             console.log('Fail');
             i--;
         }
 }
}

rememberMyFilms();


function detectPersonalLevel () {
    if (personalMovieDB.count>0 && personalMovieDB.count< 10) {
        alert('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >9 && personalMovieDB.count <30) {
        alert('Вы классический зритель')
    }else if (personalMovieDB.count >30) {
        alert('Вы киноман!')
    } else {
        alert('Произошла ошибка!')
    }
}

detectPersonalLevel();

console.log(personalMovieDB);

