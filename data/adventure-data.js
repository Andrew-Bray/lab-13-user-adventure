const creepyCorner = {
    id: 'corner',
    title: 'This Creepy Corner',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
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
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 food.
        `,
        health: -30,
        food: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 health damage.
        `,
        health: -50,
        food: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Problem Dragon',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You travel to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 food.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 health damage. 
        `,
        health: -35,
        food: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 health damage.
        `,
        health: -45,
        food: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 food.
        `,
        health: 0,
        food: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'some -image.png',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 food pieces!',
        health: 0,
        food: 40
    }, {
        id: 'fooden',
        description: 'A fooden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 health damage',
        health: -50,
        food: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 health',
        health: 35,
        food: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon
];

export default quests;