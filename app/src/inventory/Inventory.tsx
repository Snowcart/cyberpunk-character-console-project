import * as React from 'react';
import { characterContext } from '../context/CharacterContext';

const Inventory = () => {
	const ctx = React.useContext(characterContext);

	React.useEffect(() => {
		if (!ctx.character.inventory?.eddies)
			ctx.setCharacter({ ...ctx.character, inventory: { ...ctx.character.inventory, eddies: 0 } });
	}, []);

	const InventoryTitle = (
		<div>
			<h1>GEAR</h1>
			<h1>€$ {ctx.character.inventory?.eddies}</h1>
		</div>
	);

	return InventoryTitle;
};

export default Inventory;
