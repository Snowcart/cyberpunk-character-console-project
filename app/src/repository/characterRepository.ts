import Character from 'src/models/character';

const characterKey = 'character';

const getCharacterFromStorage = (): Character => {
	const rawCharacterData = localStorage.getItem(characterKey);
	if (rawCharacterData) return JSON.parse(rawCharacterData);

	if (!rawCharacterData) return {} as Character;
	try {
		return JSON.parse(rawCharacterData);
	} catch (e) {
		console.error(`Failed to parse JSON from storage: ${rawCharacterData}`);
		return {} as Character;
	}
};

const setCharacterInStorage = (character: Character) => localStorage.setItem(characterKey, JSON.stringify(character));

export { getCharacterFromStorage, setCharacterInStorage };
