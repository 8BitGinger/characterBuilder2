

const minorItems = [
  "Minor Healing Potion",
    "Minor Mana Potion", "Minor Stamina Potion", "Minor Strength Potion",]

const mediumItems = [
    "Medium Healing Potion",
        "Medium Mana Potion", "Medium Stamina Potion", "Medium Strength Potion",]

const majorItems = [
    "Major Healing Potion",
        "Major Mana Potion", "Major Stamina Potion", "Major Strength Potion",]

const magicItems = [
    "Magic Healing Potion",
        "Magic Mana Potion", "Magic Stamina Potion", "Magic Strength Potion",]

const consumables = [
    "Healing Potion",
        "Mana Potion", "Stamina Potion", "Strength Potion",]

const randomItems = {
    minorItems: minorItems,
    mediumItems: mediumItems,
    majorItems: majorItems,
    magicItems: magicItems,
    consumables: consumables,
};

export default randomItems;

export const getRandomItem = (itemType) => {
    const items = randomItems[itemType];
    if (!items) {
        throw new Error(`Item type ${itemType} not found`);
    }
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};