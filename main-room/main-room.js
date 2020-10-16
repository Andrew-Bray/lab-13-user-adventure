//import { getSpider } from '../storage-utils.js';
import adventures from '../data/adventure-data.js';
import createAdventureLink from './create-link.js';


//grab the user data

    //const spider = getSpider();

//if they are dead or have completed their spidery adventures

    //then go to the results page

//get adventure element dom
const nav = document.getElementById('adventures');
//for loop to each quest
for (let i = 0; i < adventures.length; i++) {
    const adventure = adventures[i];
    let adventureDisplay = null;

    //if the user has completd it

    //make it no longer a link (build seperate function createCompletedAdventure)

    adventureDisplay = createAdventureLink(adventure);
    
    //and then, either way, add the display to the page.
    nav.appendChild(adventureDisplay);
}