import * as React from 'react';
import { characterContext } from '../context/CharacterContext';
import styled from 'styled-components';
import InventoryTitle from './InventoryTitle';

const Inventory = () => {
	const ctx = React.useContext(characterContext);

	return (
		<>
			<InventoryTitle />
		</>
	);
};

export default Inventory;

const GearTitleWrapper = styled.div`
	border-bottom: 1px solid blue;
	width: 100%;
	height: 15%;
	min-height: 90px;
	> h1 {
		float: left;
		max-width: 50%;
		&:last-of-type {
			float: left;
		}
	}
`;
