import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import Stats from '../models/stats';
import styled from 'styled-components';
import Stat from './Stat';
import Character from '../models/Character';

const Stats = () => {
	const characterCtx = React.useContext(characterContext);
	let stats: Stats = characterCtx.character?.stats ?? ({} as Stats);

	const createStatTable = () => {
		const statArray: StatView[] = [
			{ title: 'INT', value: stats.intelligence },
			{ title: 'REF', value: stats.reflex },
			{ title: 'TECH', value: stats.tech },
			{ title: 'ATTR', value: stats.attractiveness },
			{ title: 'LUCK', value: stats.luck },
			{ title: 'MA', value: stats.movementAbility },
			{ title: 'BODY', value: stats.body },
			{ title: 'EMP', value: stats.empathy, calculatedValue: getEmpathy(characterCtx.character) },
			{ title: 'COOL', value: stats.cool }
		];

		return statArray.map((x) => {
			return (
				<Stat
					title={x.title}
					number={x.value}
					split={x.calculatedValue ? true : false}
					calculated={x.calculatedValue}
				/>
			);
		});
	};

	const statBlock = (
		<>
			<StatWrapper>
				<div>{createStatTable()}</div>
			</StatWrapper>
		</>
	);

	return statBlock;
};

interface StatView {
	title: string;
	value: number;
	calculatedValue?: number;
}

export default Stats;

const StatWrapper = styled.div`
	width: 100%;
	text-align: center;
`;

export const getEmpathy = (character: Character) => {
	return Math.floor(getHumanity(character) / 10);
};

const getHumanity = (character: Character) => {
	return character.stats?.empathy * 10 - character.inventory?.cybernetics?.reduce((s, c) => (s += c.humanityLoss), 0);
};
