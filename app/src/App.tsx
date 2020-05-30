import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Title from './title/Title';
import { useCharacter } from './hooks/useCharacter';
import { characterContext } from './context/CharacterContext';
import Stats from './stats/Stats';

export default () => {
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
				<div>
					<div>
						<Stats />
					</div>
					<div>{/* Save / BTM */}</div>
				</div>
				<div>{/* Actions */}</div>
				<div>{/* Inventory */}</div>
				<div>{/* Cybernetics */}</div>
				<div>{/* Stats */}</div>
			</characterContext.Provider>
		</>
	);
};
