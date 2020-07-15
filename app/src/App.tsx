import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Title from './title/Title';
import { useCharacter } from './hooks/useCharacter';
import { characterContext } from './context/CharacterContext';
import Stats from './stats/Stats';
import Saves from './saves/Saves';
import Skills from './skills/Skills';
import HealthBar from './health/Health';
import Inventory from './inventory/Inventory';
import Actions from './actions/Actions';
import { Cybernetics } from './cybernetics/Cybernetics';

export default () => {
	const character = useCharacter();

	const GlobalStyle = createGlobalStyle`


	html {
		height: 100%;
	}

	body {
		font-family: 'Source Code Pro', monospace;
		height: 100%;
		margin: 0;
		background-color: #2e2e2e;
		color: #00ccff;
	}

	input {
		background-color: #2e2e2e;
		color: #00ccff
	}

	#app {
		height: 100%;
	}
	`;

	return (
		<>
			<GlobalStyle />
			<characterContext.Provider value={character}>
				<div
					style={{
						height: 'calc(100% - 2px)',
						display: 'grid',
						border: '1px solid blue',
						gridColumnStart: 1,
						gridTemplateColumns: 'minmax(508px, 535px) auto 25%',
						gridTemplateRows: '60px calc(50% - 60px) 60px calc(50% - 60px)'
					}}
				>
					<div style={{ border: '1px solid blue', gridArea: '1 / 1 / span 1 / span 3' }}>
						<Title />
					</div>
					<StatsWrapper>
						<div style={{ height: '100%', minHeight: '300px', position: 'relative' }}>
							<Stats />
							<Saves />
						</div>
					</StatsWrapper>
					<div style={{ border: '1px solid purple', gridArea: '2 / 2 / span 1 / span 1' }}>
						<Actions />
					</div>
					<div style={{ border: '1px solid red', gridArea: '3 / 1 / span 1 / span 2' }}>
						<HealthBar />
					</div>
					<InventoryWrapper>
						<Inventory />
					</InventoryWrapper>
					<CyberneticWrapper>
						<Cybernetics />
					</CyberneticWrapper>
					<SkillsWrapper style={{ border: '1px solid blue', gridArea: '2 / 3 / span 3 / span 1' }}>
						<Skills />
					</SkillsWrapper>
				</div>
			</characterContext.Provider>
		</>
	);
};

const StatsWrapper = styled.div`
	overflow: scroll;
	border: 2px solid #00ffff;
	gridarea: 2 / 1 / span 1 / span 1;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const CyberneticWrapper = styled.div`
	overflow-y: scroll;
	border: 1px solid blue;
	gridarea: 4 / 2 / span 1 / span 1;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const SkillsWrapper = styled.div`
	/* border: 1px solid blue;
	gridarea: 2 / 3 / span 3 / span 1; this is the same as the inline style, but doesn't work */
	overflow-y: scroll;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const InventoryWrapper = styled.div`
	border: 1px solid blue;
	gridarea: 4 / 1 / span 1 / span 1;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
