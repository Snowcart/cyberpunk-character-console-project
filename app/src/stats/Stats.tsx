import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import Stats from '../models/stats';
import styled from 'styled-components';
import Stat from './Stat';

const Stats = () => {
	const characterCtx = React.useContext(characterContext);
	let stats: Stats = characterCtx.character?.stats ?? ({} as Stats);

	if (!stats.intelligence) {
		stats.intelligence = 9;
		stats.attractiveness = 9;
		stats.body = 9;
		stats.cool = 9;
		stats.empathy = 9;
		stats.luck = 9;
		stats.movementAbility = 9;
		stats.reflex = 9;
		stats.tech = 9;
	}

	const createStatTable = () => {
		const statArray: StatView[] = [
			{ title: 'INT', value: stats.intelligence },
			{ title: 'REF', value: stats.reflex },
			{ title: 'TECH', value: stats.tech },
			{ title: 'ATTR', value: stats.attractiveness },
			{ title: 'LUCK', value: stats.luck },
			{ title: 'MA', value: stats.movementAbility },
			{ title: 'BODY', value: stats.body },
			{ title: 'EMP', value: stats.empathy },
			{ title: 'COOL', value: stats.cool }
		];

		return statArray.map((x) => {
			return <Stat title={x.title} number={x.value} />;
		});
	};

	const statBlock = (
		<>
			<div>
				<h2>Stats:</h2>
				<div>{createStatTable()}</div>
			</div>
		</>
	);

	return statBlock;
};

interface StatView {
	title: string;
	value: number;
}

export default Stats;

const StatWrapper = styled.div``;
