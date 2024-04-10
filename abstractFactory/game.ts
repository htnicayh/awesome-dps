/** Abstract products */
interface Character {
    display(): void;
}

interface Item {
    display(): void;
}

/** Concrete products */
class Archer implements Character {
    display = () => {
        console.log(`It's archer. (character)`);
    };
}

class Warrior implements Character {
    display = () => {
        console.log(`It's warrior. (character)`);
    };
}

class Weapon implements Item {
    display = () => {
        console.log(`It's weapon. (item)`);
    };
}

class Armor implements Item {
    display = () => {
        console.log(`It's armor. (item)`);
    };
}

/** Abstract factories */
interface CharacterFactory {
    createCharacter(): Character;
}

interface ItemFactory {
    createItem(): Item;
}

/** Concrete factories */
class ArcherFactory implements CharacterFactory {
    createCharacter = (): Character => {
        return new Archer();
    };
}

class WarriorFactory implements CharacterFactory {
    createCharacter = (): Character => {
        return new Warrior();
    };
}

class WeaponFactory implements ItemFactory {
    createItem = (): Item => {
        return new Weapon();
    };
}

class ArmorFactory implements ItemFactory {
    createItem = (): Item => {
        return new Armor();
    };
}

/** Client */
class Game {
    constructor(
        private characterFactory: CharacterFactory,
        private itemFactory: ItemFactory
    ) {}

    public createGameObjects = (): void => {
        const character = this.characterFactory.createCharacter();
        const item = this.itemFactory.createItem();

        character.display();
        item.display();
    };
}

const archerGameObjects = new Game(new ArcherFactory(), new WeaponFactory());
const warriorGameObjects = new Game(new WarriorFactory(), new ArmorFactory());

archerGameObjects.createGameObjects();
warriorGameObjects.createGameObjects();
