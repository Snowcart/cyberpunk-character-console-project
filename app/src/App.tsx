import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Character from './models/character';

export default () => <App />;

const App = () => {
	const characterContext = {} as Character;
	const CharacterContext = React.createContext(characterContext);
	const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background-color: #2e2e2e;
	}
	`;

	return (
		<>
			<GlobalStyle />
			<h1>Hello worlds</h1>
		</>
	);
};
