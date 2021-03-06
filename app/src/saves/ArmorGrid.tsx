import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import styled from 'styled-components';
import ArmorGridCell from './ArmorGridCell';

const ArmorGrid = () => {
	const characterCtx = React.useContext(characterContext);

	const getLocationSection = () => {
		const locationTitles = [
			{ title: 'Head', num: '1' },
			{ title: 'Torso', num: '2-4' },
			{ title: 'R.Arm', num: '5' },
			{ title: 'L.Arm', num: '6' },
			{ title: 'R.Leg', num: '7-8' },
			{ title: 'L.Leg', num: '9-0' }
		];

		return locationTitles.map((x) => {
			return (
				<ArmorSectionDiv>
					<LocationTitleDiv>{x.title}</LocationTitleDiv>
					<LocationTitleDiv>{x.num}</LocationTitleDiv>
				</ArmorSectionDiv>
			);
		});
	};

	const getSpSection = () => {
		// Actual Proof Typescript is Garbage
		const locations: ('head' | 'torso' | 'rightArm' | 'leftArm' | 'rightLeg' | 'leftLeg')[] = [
			'head',
			'torso',
			'rightArm',
			'leftArm',
			'rightLeg',
			'leftLeg'
		];

		return locations.map((x) => {
			return (
				<ArmorSectionDiv>
					<ArmorGridCell location={x} />
				</ArmorSectionDiv>
			);
		});
	};

	return (
		<ArmorGridWrapper>
			<LocationAndSp>
				<ArmorTitle>
					<div>LCTN</div>
				</ArmorTitle>
				{getLocationSection()}
			</LocationAndSp>
			<LocationAndSp>
				<ArmorTitle>
					<div>SP</div>
				</ArmorTitle>
				{getSpSection()}
			</LocationAndSp>
		</ArmorGridWrapper>
	);
};

const ArmorGridWrapper = styled.div`
	border: 1px solid #00ccff;
	min-width: 300px;
	width: 60%;
	float: left;
	top: 0;
	height: 170px;
	box-shadow: 2px 1px #00ffff;
	box-sizing: border-box;
`;

const LocationAndSp = styled.div`
	width: 100%;
	height: 50%;
	border-top: 1px solid #00ffff;
	float: left;
`;

const ArmorTitle = styled.div`
	min-width: 60px;
	width: 18%;
	height: 100%;
	border-right: 1px solid #00ffff;
	text-align: center;
	float: left;
	vertical-align: center;
	div {
		padding-top: 50%;
	}
`;

const ArmorSectionDiv = styled.div`
	border-left: 1px solid #00ffff;
	border-bottom: 1px solid #00ffff;
	width: 13%;
	min-width: 40px;
	float: left;
	height: 100%;
	box-sizing: border-box;
`;

const LocationTitleDiv = styled.div`
	width: 100%;
	height: 50%;
	text-align: center;
`;

const ArmorSection = (text: any) => <ArmorSectionDiv>{text}</ArmorSectionDiv>;
export default ArmorGrid;
