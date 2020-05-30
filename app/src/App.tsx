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
		color: #00ccff;
		text-shadow: 2px 1px #00ffff;
	}
	`;

	return (
		<>
			<GlobalStyle />
			<characterContext.Provider value={character}>
				<Title />
				<div style={{ display: 'grid', border: '1px solid blue', gridColumnStart: 1 }}>
					<div style={{ border: '1px solid blue' }}>
						<div style={{ border: '1px solid blue' }}>
							<Stats />
						</div>
						<div style={{ border: '1px solid blue' }}>{/* Save / BTM */}</div>
					</div>
					<div style={{ border: '1px solid blue' }}>{/* Actions */}</div>
					<div style={{ border: '1px solid blue' }}>{/* Inventory */}</div>
					<div style={{ border: '1px solid blue' }}>{/* Cybernetics */}</div>
					<div style={{ border: '1px solid blue' }}>{/* Stats */}</div>
				</div>
			</characterContext.Provider>
		</>
	);
};
