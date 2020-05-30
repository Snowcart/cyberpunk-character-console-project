import styled from 'styled-components';
import { characterContext } from '../context/CharacterContext';
import * as React from 'react';

const Stat = (props: Props) => {
	const characterCtx = React.useContext(characterContext);
	const updateStat = (e: any, statCode: string) => {
		const value = e.target.value > 10 ? 10 : e.target.value;
		const key = getNameFromCode(statCode);
		characterCtx.setCharacter({
			...characterCtx.character,
			stats: { ...characterCtx.character?.stats, [key]: value }
		});
	};

	const editableNumber = characterCtx.editable ? (
		<input type="number" value={props.number} max={10} onChange={(e) => updateStat(e, props.title)} />
	) : (
		props.number
	);

	return (
		<StatSection key={props.title}>
			<h3>
				{props.title} [ {!props.split ? editableNumber : `${editableNumber} / ${props.calculated}`} ]
			</h3>
		</StatSection>
	);
};

export default Stat;

interface Props {
	title: string;
	number: number;
	split?: boolean;
	calculated?: number;
}

const StatSection = styled.div`
	float: left;
	width: 33%;
`;

const getNameFromCode = (statCode: string) => {
	switch (statCode) {
		case 'INT':
			return 'intelligence';
		case 'REF':
			return 'reflex';
		case 'TECH':
			return 'tech';
		case 'ATTR':
			return 'attractiveness';
		case 'LUCK':
			return 'luck';
		case 'MA':
			return 'movementAbility';
		case 'BODY':
			return 'body';
		case 'EMP':
			return 'empathy';
		case 'COOL':
			return 'cool';
	}
};
