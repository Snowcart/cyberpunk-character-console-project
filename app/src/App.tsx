import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Character from './models/character';
import Title from './title/Title';
import { useCharacter } from './hooks/useCharacter';
import { characterContext } from './models/Context/CharacterContext';

export default () => <App />;

const App = () => {
	const character = useCharacter();

	// this is just for testing
	const { setCharacter } = React.useContext(characterContext);
	character.character.name = 'Plaxpamon';
	setCharacter(character.character);

	const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background-color: #2e2e2e;
	}
	`;

	return (
		<>
			<GlobalStyle />
			<characterContext.Provider value={character}>
				<Title />
			</characterContext.Provider>
			<h1>Hello worlds</h1>
		</>
	);
};
