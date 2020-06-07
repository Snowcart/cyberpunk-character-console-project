import * as React from 'react';
import { characterContext } from '../context/CharacterContext';
import styled from 'styled-components';
import InventoryTitle from './InventoryTitle';
import Form from '../common/Form';
import Character, { GearItem } from '../models/character';
import Armor from '../models/armor';

const Inventory = () => {
	const ctx = React.useContext(characterContext);
	const [adding, setAdding] = React.useState(false);

	const toggleAddItem = () => {
		setAdding(!adding);
	};

	React.useEffect(() => {
		const c = ctx.character;
		if (!c.inventory) {
			c.inventory = {} as Character['inventory'];
			ctx.setCharacter({ ...c });
		}
		console.log(ctx.character);
	}, []);

	const [selected, setSelected] = React.useState(null as 'armor' | 'weapons' | 'gear');

	// GEAR FORM -----------------------------------------------
	const [gearItem, setGearItem] = React.useState({} as GearItem);

	const gearFormFields = (
		<>
			<input type="text" value={gearItem.name} onChange={(e) => setGearItem({ ...gearItem, name: e.target.value })} />
			<textarea value={gearItem.desc} onChange={(e) => setGearItem({ ...gearItem, desc: e.target.value })} />
			<input
				type="number"
				value={gearItem.count}
				onChange={(e) => setGearItem({ ...gearItem, count: parseInt(e.target.value) })}
			/>
		</>
	);

	const gearVal = () => {
		if (gearItem.name && gearItem.desc && gearItem.count) return true;
		return 'Form is not valid.';
	};

	const gearSubmit = () => {
		const chr = ctx.character;
		if (!chr.inventory.gear) chr.inventory.gear = [];
		chr.inventory.gear.push(gearItem);
		ctx.setCharacter({ ...chr });
		setSelected(null);
		setGearItem({} as GearItem);
		toggleAddItem();
	};

	const gearForm = (
		<Form formFields={gearFormFields} submitButtonText="Add" validation={gearVal} onSubmit={gearSubmit} />
	);

	// END GEAR FORM -----------------------------------------------------------------

	const AddItemForm = (
		<>
			<AddItemWrapper>
				{selected === 'armor' ? (
					<SelectedButton>armor</SelectedButton>
				) : (
					<SelectButton onClick={() => setSelected('armor')}>armor</SelectButton>
				)}
				{selected === 'weapons' ? (
					<SelectedButton>weapons</SelectedButton>
				) : (
					<SelectButton onClick={() => setSelected('weapons')}>weapons</SelectButton>
				)}
				{selected === 'gear' ? (
					<SelectedButton>gear</SelectedButton>
				) : (
					<SelectButton onClick={() => setSelected('gear')}>gear</SelectButton>
				)}
			</AddItemWrapper>
			{selected === 'gear' && gearForm}
		</>
	);

	const itemCategories: ('armor' | 'weapons' | 'gear')[] = ['armor', 'weapons', 'gear'];

	const defaultInventoryItems =
		ctx.character.inventory && itemCategories.map((c) => ctx.character.inventory[c] && ctx.character.inventory[c]);

	const [sortedInventoryItems, setSortedInventoryItems] = React.useState(defaultInventoryItems);

	const InventoryItems = sortedInventoryItems?.map((c) => {
		return c?.length > 0 ? (
			<>
				<div>{c[0] && getTypeName(c[0])}</div>
				{(c as any)?.map((s: any) => {
					return (
						<div>
							<span>{s.name}</span>
							<span>{s.desc}</span>
						</div>
					);
				})}
			</>
		) : null;
	});

	return (
		<>
			<InventoryTitle />
			{adding ? (
				<CancelButton onClick={toggleAddItem}>Cancel</CancelButton>
			) : (
				<AddButton onClick={toggleAddItem}>Add</AddButton>
			)}
			{adding ? AddItemForm : InventoryItems}
		</>
	);
};

export default Inventory;

const InventoryItemss = styled.div`
	width: 100%;
	background-color: blue;
	height: 600px;
`;
const AddForm = styled.div`
	width: 100%;
	background-color: purple;
	height: 500px;
`;

const AddButton = styled.div`
	width: 100px;
	height: 50px;
	background-color: green;
	cursor: pointer;
`;
const CancelButton = styled(AddButton)`
	background-color: red;
`;

const SelectButton = styled.div`
	width: 33.333%;
	height: 40px;
	float: left;
	border: 1px solid green;
	box-sizing: border-box;
	background-color: #008f11;
	cursor: pointer;
`;

const SelectedButton = styled(SelectButton)`
	background-color: #003b00;
	cursor: default;
`;

const AddItemWrapper = styled.div`
	width: 100%;
`;

const getTypeName = (item: any) => {
	if (item.count) return 'GEAR';
	if (item.type) return 'WEAPON';
	if (item.stoppingPower) return 'ARMOR';
	return 'UNKNOWN';
};
