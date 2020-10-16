function scoreAdventure(choice, adventureId, spider) {
    // add health to the spider
    spider.health += choice.health;
    // add food to the spider's belly
    spider.food += choice.food;
    // set this adventure as completed in the spider ID
    spider.completed[adventureId] = true;
}

export default scoreAdventure;