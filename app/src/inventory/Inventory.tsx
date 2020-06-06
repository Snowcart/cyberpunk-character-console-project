import * as React from 'react';
import { characterContext } from '../context/CharacterContext';
import styled from 'styled-components';

const Inventory = () => {
	const ctx = React.useContext(characterContext);

	React.useEffect(() => {
		if (!ctx.character.inventory?.eddies)
			ctx.setCharacter({ ...ctx.character, inventory: { ...ctx.character.inventory, eddies: 0 } });
	}, []);

	const InventoryTitle = (
		<GearTitleWrapper>
			<h1>GEAR</h1>
			<h1>€$ {ctx.character.inventory?.eddies}</h1>
			<input />
		</GearTitleWrapper>
	);

	return InventoryTitle;
};

export default Inventory;

const GearTitleWrapper = styled.div`
	border-bottom: 1px solid blue;
	width: 100%;
	height: 10%;
	> h1 {
		float: left;
		max-width: 50%;
		&:last-of-type {
			float: right;
		}
	}
`;
