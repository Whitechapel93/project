"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



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

if (personalMovieDB.count>0 && personalMovieDB.count< 10) {
    alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >9 && personalMovieDB.count <30) {
    alert('Вы классический зритель')
}else if (personalMovieDB.count >30) {
    alert('Вы киноман!')
} else {
    alert('Произошла ошибка!')
}

console.log(personalMovieDB);




