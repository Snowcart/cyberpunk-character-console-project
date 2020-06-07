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
