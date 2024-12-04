const arrows = document.querySelectorAll('.arrow');
const movies = document.querySelectorAll('.movie-lists');

arrows.forEach((arrow, i) => {
    const moviesNumber = movies[i].querySelectorAll('img').length;
    let clickCounter = 0;
    arrow.addEventListener('click', () => {
        clickCounter++;
        if (moviesNumber - (5 + clickCounter) >= 0) {
            movies[i].style.transform = `translateX(${movies[i].computedStyleMap().get('transform')[0].x.value - 300}px)`;
        } else {
            movies[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }
    })
});
