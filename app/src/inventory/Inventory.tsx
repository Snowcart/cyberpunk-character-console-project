import * as React from 'react';
import { characterContext } from '../context/CharacterContext';
import styled from 'styled-components';
import InventoryTitle from './InventoryTitle';
import Form from '../common/Form';
import Character, { GearItem } from '../models/Character';
import Armor from '../models/armor';
import GearItemForm from './inventoryForms/GearForm';
import WeaponForm from './inventoryForms/WeaponForm';
import ArmorForm, { getArmorType } from './inventoryForms/ArmorForm';

const Inventory = () => {
	const ctx = React.useContext(characterContext);
	const [adding, setAdding] = React.useState(false);
	const [filterSearch, setFilterSearch] = React.useState<string>('');

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
			{selected === 'weapons' && <WeaponForm setSelected={setSelected} toggleAddItem={toggleAddItem} />}
			{selected === 'armor' && <ArmorForm setSelected={setSelected} toggleAddItem={toggleAddItem} />}
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

	React.useEffect(() => {
		// do nothing for now
	}, [filterSearch]);

	const InventoryItems = sortedInventoryItems?.map((c) => {
		return c?.length > 0 ? (
			<>
				<Cat>{c[0] && getTypeName(c[0])}</Cat>
				{(c as any)?.map((s: any) => {
					return <ItemWrapper>{renderItem(s, getTypeName(s))}</ItemWrapper>;
				})}
			</>
		) : null;
	});

	return (
		<>
			<InventoryTitle />
			<TopWrapper>
				{adding ? (
					<CancelButton onClick={toggleAddItem}>Cancel</CancelButton>
				) : (
					<AddButton onClick={toggleAddItem}>Add</AddButton>
				)}
				<InputWrapper>
					<Input placeholder="< search >" />
				</InputWrapper>
			</TopWrapper>
			{adding ? AddItemForm : InventoryItems}
		</>
	);
};

export default Inventory;

export const TopWrapper = styled.div`
	width: 100%;
	height: 40px;
	box-sizing: border-box;
`;

export const InputWrapper = styled.div`
	float: left;
	width: calc(100% - 100px);
`;

export const Input = styled.input`
	width: 100%;
	height: 40px;
	font-size: 18px;
	box-sizing: border-box;
	border: 1px solid #00ccff;
`;

const ItemWrapper = styled.div`
	width: 100%;
	text-align: left;
`;

const Cat = styled.div`
	width: 100%;
	background-color: #00ccff;
	margin-top: 10px;
	margin-bottom: 15px;
	font-size: 18px;
	color: #2e2e2e;
`;

const ItemSection = styled.span``;

export const AddButton = styled.div`
	width: 100px;
	height: 40px;
	background-color: green;
	cursor: pointer;
	float: left;
`;
export const CancelButton = styled(AddButton)`
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

const ItemGrid = styled.div`
	display: grid;
	width: 100%;
	margin-bottom: 9px;
	grid-template-columns: 30% 70%;
	span {
		border: 1px solid green;
	}
`;

const WeaponGrid = styled(ItemGrid)`
	grid-template-columns: 40% 40% 20%;
`;

const ArmorGrid = styled(ItemGrid)`
	grid-template-columns: 40% 20% 40%;
`;

const getTypeName = (item: any) => {
	if (item.count) return 'GEAR';
	if (item.type) return 'WEAPON';
	if (item.stoppingPower) return 'ARMOR';
	return 'UNKNOWN';
};

const renderItem = (item: any, type: string) => {
	console.log(item);
	console.log(type);
	if (type === 'GEAR')
		return (
			<ItemGrid>
				<ItemSection>{item.name}</ItemSection>
				<ItemSection>{item.desc}</ItemSection>
			</ItemGrid>
		);
	if (type === 'WEAPON')
		return (
			<WeaponGrid>
				<ItemSection>{item.name}</ItemSection>
				<ItemSection>{item.type}</ItemSection>
				<ItemSection>{item.concealability}</ItemSection>
			</WeaponGrid>
		);
	if (type === 'ARMOR')
		return (
			<ArmorGrid>
				<ItemSection>{item.name}</ItemSection>
				<ItemSection>{item.stoppingPower}</ItemSection>
				<ItemSection>{getArmorType(item)}</ItemSection>
			</ArmorGrid>
		);
};

// const getFilteredInventory = (ivy: Character['inventory'], search: string) => {
// 	const lowercaseSearch = search ? search.toLowerCase() : null;
// 	if (lowercaseSearch) {
// 		const armor = ivy.armor;
// 		const weapons = ivy.weapons;
// 		const gear = ivy.gear;

// 		const farmor = armor.filter(
// 			(x) => x?.name?.toLowerCase().includes(lowercaseSearch) || x?.stoppingPower.toString().includes(lowercaseSearch)
// 		);

// 		const fweapons = weapons.filter(x => x?.name?.toLowerCase().includes(lowercaseSearch) || x?.type.toLowerCase().includes(lowercaseSearch));

// 		const fgear = gear.filter(x => x?.name?.toLow )
// 	}
// 	return lowercaseSearch
// 		? ivy.filter(
// 				(x) => x?.name?.toLowerCase().includes(lowercaseSearch) || x?.category?.toLowerCase().includes(lowercaseSearch)
// 		  )
// 		: skills;
// };
