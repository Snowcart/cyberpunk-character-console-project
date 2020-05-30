import * as React from 'react';
import { characterContext } from 'src/context/CharacterContext';
import InventoryRecord from 'src/models/gear';

export default () => {
	const characterCtx = React.useContext(characterContext);
	const inventory = characterCtx.character?.inventory.gear ?? [];

	return (
		<div>
			{inventory.map((i) => (
				<div>{i.item.name}</div>
			))}
		</div>
	);
};
