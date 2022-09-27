import { teamCards } from './team-card.js';
import teamCardItem from '../templates/team-templat.hbs'; 
import refs from './refs.js';

function createTeamMarkup(teamCards) {
    const markup = teamCardItem(teamCards);
    return refs.teamContainer.innerHTML = markup;
}

