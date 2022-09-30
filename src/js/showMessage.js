import refs from './refs.js';
import onSearch from './fetch-movies';


function showMessage() {
    refs.errorOutput.classList.remove('visually-hidden');
}

function hideMessage() {
    refs.errorOutput.classList.add('visually-hidden');
}