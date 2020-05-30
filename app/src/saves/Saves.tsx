import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import styled from 'styled-components';

const Saves = () => {
	const characterCtx = React.useContext(characterContext);
	const [save, setSave] = React.useState(null as number);
	const [btm, setBtm] = React.useState(null as number);

	// React.useEffect(() => {
	// 	if (save === null && characterCtx.character !== null) {
	// 		setSave(characterCtx.character.getSave());
	// 	}
	// }, [characterCtx.character]);

	// getSave and getBTM don't work

	const Save = (
		<SaveWrapper>
			<SaveTitle>SAVE</SaveTitle>
			<div>{save}</div>
		</SaveWrapper>
	);

	const Btm = (
		<BtmWrapper>
			<SaveTitle>BTM</SaveTitle>
			<div>{}</div>
		</BtmWrapper>
	);

	return (
		<BottomBarWrapper>
			{Save}
			{Btm}
		</BottomBarWrapper>
	);
};

export default Saves;

const BottomBarWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

const SaveWrapper = styled.div`
	width: 100px;
	height: 170px;
	border: 1px solid #00ccff;
	position: absolute;
	bottom: 0;
`;

const SaveTitle = styled.div`
	border-bottom: 1px solid #00ccff;
	width: 100%;
	text-align: center;
`;

const BtmWrapper = styled(SaveWrapper)`
	left: 100px;
`;
