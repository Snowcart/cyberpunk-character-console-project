import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Character from './models/character';
import Title from './title/Title';

export default () => <App />;

const App = () => {
	const character = {} as Character;
	character.name = 'Plaxpamon';
	const CharacterContext = React.createContext(character);
	const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background-color: #2e2e2e;
	}
	`;

	return (
		<>
			<GlobalStyle />
			<CharacterContext.Provider value={character}>
				<Title context={CharacterContext} />
			</CharacterContext.Provider>
			<h1>Hello worlds</h1>
		</>
	);
};
