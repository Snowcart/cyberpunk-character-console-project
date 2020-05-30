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
				<div
					style={{
						display: 'grid',
						border: '1px solid blue',
						gridColumnStart: 1,
						gridTemplateColumns: '30% 40% 30%',
						gridTemplateRows: '60px calc(50% - 60px) 60px calc(50% - 60px)'
					}}
				>
					<div style={{ border: '1px solid blue', gridColumn: '1 / 3' }}>
						<Title />
					</div>
					<div style={{ border: '1px solid blue', gridRow: 2, gridColumn: 1, overflow: 'hidden' }}>
						<div style={{ border: '1px solid blue' }}>
							<Stats />
						</div>
						<div style={{ border: '1px solid blue' }}>
							<p>Save / btm</p>
						</div>
					</div>
					<div style={{ border: '1px solid blue', gridColumn: 2, gridRow: 2 }}>
						<p>Actions</p>
					</div>
					<div style={{ border: '1px solid blue', gridColumn: '1 / 2', gridRow: 3 }}>
						<p>Health</p>
					</div>
					<div style={{ border: '1px solid blue', gridRow: 4, gridColumn: '1 / 2' }}>
						<p>Inventory</p>
					</div>
					<div style={{ border: '1px solid blue', gridRow: '3 / 4', gridColumn: 2 }}>
						<p>Cybernetics</p>
					</div>
					<div style={{ border: '1px solid blue', gridRow: '2 / 4', gridColumn: 3 }}>
						<p>Stats</p>
					</div>
				</div>
			</characterContext.Provider>
		</>
	);
};
