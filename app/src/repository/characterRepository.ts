import Character from 'src/models/character';

const characterKey = 'character';

const getCharacterFromStorage = (): Character => JSON.parse(localStorage.getItem(characterKey));

const setCharacterInStorage = (character: Character) => localStorage.setItem(characterKey, JSON.stringify(character));

export { getCharacterFromStorage, setCharacterInStorage };
