import { useState, useCallback } from 'react';
import { CharacterContext } from 'src/models/Context/CharacterContext';
import Character from 'src/models/Character';

export const useCharacter = (): CharacterContext => {
	const [character, setCharacterObj] = useState({} as Character);

	const setCharacter = useCallback((character: Character): void => {
		setCharacterObj(character);
	}, []);

	return { character, setCharacter };
};
