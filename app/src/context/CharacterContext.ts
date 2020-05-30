import Character from '../models/character';
import * as React from 'react';

export interface CharacterContext {
	character: Character;
	setCharacter: (character: Character) => void;
	editable: boolean;
	toggleEditable: (currentState: boolean) => void;
}

export const defaultCharacterContext = {
	character: new Character(),
	setCharacter: () => {},
	editable: false,
	toggleEditable: () => {}
};

export const characterContext = React.createContext<CharacterContext>(defaultCharacterContext);
