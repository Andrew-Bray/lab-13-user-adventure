import { saveSpider } from './storage-utils.js';
// import functions and grab DOM elements
const nameForm = document.getElementById('name-form');
const speciesForm = document.getElementById('species-form');
// initialize state
let spider = {};
// set event listeners to update state and DOM
nameForm.addEventListener(('submit'), (e) => {
    e.preventDefault();

    const data = new FormData(nameForm);

    spider = {
        name: data.get('name'),
        species: 0,
        food: 20,
        health: 50,
        completed: {}
    };
    console.log(spider);
});

//Species Form Event-listener
speciesForm.addEventListener(('submit'), (e) => {
    e.preventDefault();
    const data = new FormData(speciesForm);
    spider['species'] = data.get('species');
    console.log(spider);
    saveSpider(spider);
});



