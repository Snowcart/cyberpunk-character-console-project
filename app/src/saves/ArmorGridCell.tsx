import * as React from 'react';
import { characterContext } from '../context/CharacterContext';
import styled from 'styled-components';

const ArmorGridCell = (props: Props) => {
	const characterCtx = React.useContext(characterContext);
	const armor = characterCtx.character?.armor ? characterCtx.character.armor[props.location] : null;

	const onArmorInput = (e: any) => {
		const value = e.target.value as number; // needed because input is set to string;
		const char = characterCtx.character;
		characterCtx.setCharacter({ ...char, armor: { ...char.armor, [props.location]: value } });
	};

	const changeArmorValue = (up: boolean) => {
		let updatedArmor: number = parseInt(armor as any); // this is getting set to a string on input, must parseInt
		if (up) {
			if (!updatedArmor) updatedArmor = 1;
			else updatedArmor += 1;
		}

		if (!up) {
			if (!updatedArmor) updatedArmor = 0;
			else updatedArmor -= 1;
			if (updatedArmor < 0) updatedArmor = 0;
		}

		const char = characterCtx.character;
		characterCtx.setCharacter({ ...char, armor: { ...char.armor, [props.location]: updatedArmor } });
	};

	const visual = (
		<ArmorCellDiv>
			<ArmorButton onClick={() => changeArmorValue(true)}>▲</ArmorButton>
			<ArmorDiv>{armor}</ArmorDiv>
			<ArmorButton onClick={() => changeArmorValue(false)}>▼</ArmorButton>
		</ArmorCellDiv>
	);

	const edit = (
		<ArmorCellDiv>
			<EditWrapper>
				<input type="number" value={armor} onChange={(e) => onArmorInput(e)} />
			</EditWrapper>
		</ArmorCellDiv>
	);
	return characterCtx.editable ? edit : visual;
};

interface Props {
	location: 'head' | 'torso' | 'rightArm' | 'leftArm' | 'rightLeg' | 'leftLeg';
}

export default ArmorGridCell;

const ArmorCellDiv = styled.div`
	width: 100%;
	height: 100%;
`;

const EditWrapper = styled.div`
	height: 100%;
	width: 90%;
	input {
		width: 100%;
		text-align: center;
		margin-top: 50%;
	}
`;
const ArmorDiv = styled.div`
	height: 33.3%;
	text-align: center;
`;

const ArmorButton = styled(ArmorDiv)`
	cursor: pointer;
`;
