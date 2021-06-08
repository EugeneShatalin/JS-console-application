'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if(addInput.value) {
            
            if(checkbox.checked) {
                console.log("Добавляем любимый фильм");
            }
    
            if(addInput.value.length > 21) {
                movieDB.movies.push(addInput.value.slice(0, 22) + '...');
            } else {
                movieDB.movies.push(addInput.value);
            }
           
            sortArr(movieDB.movies);
            
            createMovieList(movieDB.movies, moviesList);
    
        } 
        
        e.target.reset();
    });

    const deletAdv = (arr) => {arr.forEach(i => i.remove())};

    deletAdv(adv);

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = `url("img/bg.jpg")`;

    }    

    const sortArr = (arr) => {arr.sort()};
      
    const createMovieList = (films, parant) => {
        parant.innerHTML = "";
        sortArr(films);       

        films.forEach((item, index) => {
            parant.innerHTML += `
        <li class="promo__interactive-item">${index + 1} ${item}
            <div class="delete"></div>
        </li>
    `
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);                
                createMovieList(films, parant);
            });
        });
    }

    makeChanges();    
    createMovieList(movieDB.movies, moviesList);

    
});