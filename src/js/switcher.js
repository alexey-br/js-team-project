import refs from './refs';

refs.switcher.addEventListener('click', toggleTheme);

function toggleTheme() {
    document.body.classList.toggle("theme-dark");
    (function () {
        if (document.body.classList.toggle("theme-dark")) {
            document.getElementById('slider').checked = false;
        } else {
          
            document.getElementById('slider').checked = true;
        }
    })
}