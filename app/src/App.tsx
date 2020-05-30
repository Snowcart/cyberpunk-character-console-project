import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Title from './title/Title';
import { useCharacter } from './hooks/useCharacter';
import { characterContext } from './context/CharacterContext';
import Stats from './stats/Stats';

export default () => <App />;

const App = () => {
	const character = useCharacter();

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
				<Stats />
			</characterContext.Provider>
		</>
	);
};
