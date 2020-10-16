import { getSpider, saveSpider } from '../storage-utils.js';
import adventures from '../data/adventure-data.js';
import { findById } from '../utils.js';
import scoreAdventure from './score-adventure.js';


// go grab the query parameter from the URL
const searchParams = new URLSearchParams(window.location.search);
// go get the quest id from the URL
const adventureId = searchParams.get('id');
const adventure = findById(adventures, adventureId);

//I like this backup
if (!adventure) {
    window.location = '../map';
}
//a bunch of DOMS!!!
const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

// use the adventure that we found to populate the dom
title.textContent = adventure.title;
image.src = '../assets/adventures/' + adventure.image;
audio.src = '../assets/adventures/' + adventure.audio;
description.textContent = adventure.description;

//for each of the adventure's choices
for (let i = 0; i < adventure.choices.length; i++) {
    const choice = adventure.choices[i];

    //make a refactored
    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;

    const description = document.createElement('span');
    description.textContent = choice.description;
    choices.appendChild(label);
    label.appendChild(radio);
    label.appendChild(description);
}

//listen to that submit button, yo!
choiceForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // get user choice
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(adventure.choices, choiceId); // go find the choice based on the id

        // get user out of local storage
    const spider = getSpider();

    console.log(spider);
        // generate a score and manipulate user state
    scoreAdventure(choice, adventure.id, spider);
        // save user
    saveSpider(spider);

    //Update the UI (remove hidden)
    audio.src = '../assets/adventures/' + adventure.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
});