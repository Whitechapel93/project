"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?','');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?',''),
                b = +prompt('На сколько его оцениваете','');

            if (a != null && b != null && a !='' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b
                console.log('Done');
            } else {
                console.log('Fail');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count>0 && personalMovieDB.count< 10) {
            alert('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count >9 && personalMovieDB.count <30) {
            alert('Вы классический зритель')
        }else if (personalMovieDB.count >30) {
            alert('Вы киноман!')
        } else {
            alert('Произошла ошибка!')
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i<=3; i++) {

            {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`,'')
            }
        }
    }
}
















