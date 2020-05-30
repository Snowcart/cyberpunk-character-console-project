import { useState, useCallback } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import Character from '../models/character';
import { getCharacterFromStorage, setCharacterInStorage } from '../services/characterRepository';

export const useCharacter = (): CharacterContext => {
	const characterFromStorage = getCharacterFromStorage();
	const [character, setCharacterObj] = useState(characterFromStorage);
	const [editable, setEdit] = useState(false);

	const setCharacter = useCallback((character: Character): void => {
		setCharacterObj(character);
		setCharacterInStorage(character);
	}, []);

	const toggleEditable = useCallback((currentState: boolean) => {
		// need to pass in current state to handle how context works.
		setEdit(!currentState);
	}, []);

	return { character, setCharacter, editable, toggleEditable };
};
