import { useState, useCallback } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import Character from '../models/character';

export const useCharacter = (): CharacterContext => {
	const [character, setCharacterObj] = useState({} as Character);
	const [editable, setEdit] = useState(false);

	const setCharacter = useCallback((character: Character): void => {
		setCharacterObj(character);
	}, []);

	const toggleEditable = useCallback((currentState: boolean) => {
		// need to pass in current state to handle how context works.
		setEdit(!currentState);
	}, []);

	return { character, setCharacter, editable, toggleEditable };
};
