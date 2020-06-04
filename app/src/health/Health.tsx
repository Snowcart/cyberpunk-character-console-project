import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import styled from 'styled-components';

const HealthBar = () => {
	const ctx = React.useContext(characterContext);

	React.useEffect(() => {
		if (!ctx.character.wounds) ctx.setCharacter({ ...ctx.character, wounds: 0 });
	}, []);

	const onClickWound = (woundNumber: number) => {
		const value = ctx.character.wounds === woundNumber ? woundNumber - 1 : woundNumber;
		ctx.setCharacter({ ...ctx.character, wounds: value });
	};

	const woundBar = () => {
		let woundCount = 0;
		return woundTypes.map((x) => {
			woundCount += 4;
			const woundBoxes: JSX.Element[] = [];
			for (let x = 0; x < 4; x++) {
				woundBoxes.push(
					<WoundBox
						filled={ctx.character.wounds >= woundCount - x}
						onClick={onClickWound}
						woundNumber={woundCount - x}
					/>
				);
			}
			return (
				<>
					<WoundSection>
						<WoundTitle>{x}</WoundTitle>
						<WoundWrapper>{woundBoxes.reverse().map((x) => x)}</WoundWrapper>
					</WoundSection>
				</>
			);
		});
	};

	return <WoundBarWrapper>{woundBar()}</WoundBarWrapper>;
};

const woundTypes = [
	'light',
	'serious',
	'critical',
	'mortal0',
	'mortal1',
	'mortal2',
	'mortal3',
	'mortal4',
	'mortal5',
	'mortal6'
];

interface WoundProps {
	filled: boolean;
	onClick: (woundNumber: number) => void;
	woundNumber: number;
}

const FilledWound = styled.div`
	background-color: red;
	box-sizing: border-box;
	border-right: 1px solid #00ccff;
	width: 25%;
	height: 100%;
	float: left;
	&:last-of-type {
		border-right: 3px solid #00ccff;
	}
`;
const EmptyWound = styled(FilledWound)`
	background-color: transparent;
`;
const WoundWrapper = styled.div`
	position: relative;
	height: 100%;
`;
const WoundSection = styled.div`
	position: relative;
	width: 10%;
	float: left;
	height: calc(100% - 19px);
`;
const WoundTitle = styled.div`
	border-bottom: 1px solid red;
	top: 0;
	height: 19px;
	text-align: center;
`;
const WoundBarWrapper = styled.div`
	width: 100%;
	overflow: visible;
	height: 100%;
`;

const WoundBox = (props: WoundProps) => {
	return props.filled ? (
		<FilledWound onClick={() => props.onClick(props.woundNumber)} />
	) : (
		<EmptyWound onClick={() => props.onClick(props.woundNumber)} />
	);
};

export default HealthBar;
