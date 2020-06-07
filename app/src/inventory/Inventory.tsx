import * as React from 'react';
import { characterContext } from '../context/CharacterContext';
import styled from 'styled-components';
import InventoryTitle from './InventoryTitle';
import Form from '../common/Form';
import Character, { GearItem } from '../models/character';
import Armor from '../models/armor';
import GearItemForm from './inventoryForms/GearForm';

const Inventory = () => {
	const ctx = React.useContext(characterContext);
	const [adding, setAdding] = React.useState(false);

	const toggleAddItem = () => {
		setAdding(!adding);
	};

	const [selected, setSelected] = React.useState(null as 'armor' | 'weapons' | 'gear');

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
			{selected === 'gear' && <GearItemForm setSelected={setSelected} toggleAddItem={toggleAddItem} />}
		</>
	);

	const itemCategories: ('armor' | 'weapons' | 'gear')[] = ['armor', 'weapons', 'gear'];

	const defaultInventoryItems =
		ctx.character.inventory && itemCategories.map((c) => ctx.character.inventory[c] && ctx.character.inventory[c]);

	const [sortedInventoryItems, setSortedInventoryItems] = React.useState(defaultInventoryItems);

	React.useEffect(() => {
		const defaultInventoryItems =
			ctx.character.inventory && itemCategories.map((c) => ctx.character.inventory[c] && ctx.character.inventory[c]);
		setSortedInventoryItems(defaultInventoryItems);
	}, [ctx.character.inventory?.gear, ctx.character.inventory?.weapons, ctx.character.inventory?.armor]);

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
