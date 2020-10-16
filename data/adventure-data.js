const creepyCorner = {
    id: 'corner',
    title: 'This Creepy Corner',
    map: {
        top: '18%',
        left: '35%'
    },
    image: '',
    audio: '',
    action: '',
    description: ` Ooooooooh! There seems to be flies and other yummies hangin out in this corner. Jackpot!`,
    choices: [{
        id: 'food',
        description: 'Jump on some flies!',
        result: `
            What a successful little venture! With ease and joy, you picked off a few little poopers. What a tasty treat! Your belly gurgles with pleasure. 
        `,
        health: 5,
        food: 30
    }, {
        id: 'injury',
        description: 'Stalk slowly forward the smogasborg.',
        result: `
            another spider hops out and is pissed off, she tackles you, and you feel the prick prick of her fangs! Ouch!
        `,
        health: -30,
        food: 0
    }, {
        id: 'no-food',
        description: 'Hmmmmm... this seems fishy...',
        result: `
            Your Spider-sense tingles, and you quickly leave the buffet, as a mean looking spider rears her head. "Miiiiiiiine!!" She yells, as your legs take you away, your belly rumbling.
        `,
        health: 0,
        food: 0
    }]
};

const secretSofa = {
    id: 'sofa',
    title: 'Under the Sofa',
    map: {
        top: '92%',
        left: '60%'
    },
    image: '',
    audio: '',
    action: '',
    description: `
        You skitter your little fuzzy body into the shadows underneath the sofa. Tiny shadows, and the "click click!" of little legs. You know that sound... Cockroaches!! Your favorite!
    `,
    choices: [{
        id: 'no-food',
        description: 'sSowly stalk your prey.',
        result: `
            As you creep behind the dust bunnies, ou notice a Giant Kitty cat! You Skeddale before a giant claw swipes in front of you. Due to your measured approach, you are ready to use your madskillz to jump out of the way. 
        `,
        health: 0,
        food: 0
    }, {
        id: 'injury',
        description: 'Viciously attack your prey!',
        result: `
            In the middle of a Matrix-worthy pounce, you are side-swiped by-- a giant kitty kat! Ouch!! Ooh, you should have been more careful. Now you're oozing spider blood, and you're even hungrier.
        `,
        health: -45,
        food: -5
    }, {
        id: 'food',
        description: 'Spider sense is tingling...',
        result: `
        Something doesn’t feel right, you twitch into a corner as a GIANT cat stalks past you. Once it heads away from you, you take the moment to remove the world of another cockroach.
        `,
        health: 0,
        food: 30
    }]
};

const tinyTable = {
    id: 'table',
    title: 'An inviting table',
    map: {
        top: '80%',
        left: '30%'
    },
    image: '',
    audio: '',
    action: '',
    description: `
        You crawl up a leg of a charming table. As you crest the top you notice-- a soothing bowl of lemons.  Oooh! And above that, a cloud of fruit flies, your favorite apertif.
    `,
    choices: [{
        id: 'food',
        description: 'Let\'s stalk slowly onto a lemon',
        result: 'Slowly stalking, you twitch your way onto a fragrant lemon, and hop your way from fruit to fruit, catching a flurry of fruit flies with each jump',
        health: 5,
        food: 25
    }, {
        id: 'no-food',
        description: 'Plunge into the cloud!',
        result: 'Oooh, it turns out fruit flies are more nimble than first expected, you bold strategy is rewarded with zero captures, and your salivating fangs are left unfulfilled.',
        health: 0,
        food: 0
    }, {
        id: 'injury',
        description: 'Go around the table for a better view',
        result: 'You hear a high-pitched banshee wail, and as you turn around, you see a giant human, who flings their iPhone at you. F U, Steve Jobs!',
        health: -40,
        food: 0
    }]
};

const adventures = [
    secretSofa, 
    creepyCorner,
    tinyTable
];

export default adventures;