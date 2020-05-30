import Character from '../character';
import * as React from 'react';

export interface CharacterContext {
	character: Character;
	setCharacter: (character: Character) => void;
}

export const defaultCharacterContext = {
	character: {} as Character,
	setCharacter: () => {}
};

export const characterContext = React.createContext<CharacterContext>(defaultCharacterContext);
