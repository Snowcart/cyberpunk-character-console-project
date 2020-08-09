import * as React from 'react';
import Armor from '../../models/armor';
import { characterContext } from '../../context/CharacterContext';
import { FormItem, FormProps } from './GearForm';
import Dropdown from 'react-dropdown';
import Character from '../../models/Character';
import Form from '../../common/Form';
import Autocomplete from '../../common/Autocomplete';
import armorCatalogue from '../armorCatalogue';

const ArmorForm = (props: FormProps) => {
	const [armorItem, setArmorItem] = React.useState({} as Armor);
	const [search, setSearch] = React.useState('');
	const ctx = React.useContext(characterContext);

	const positions = ['head', 'torso', 'arms', 'legs'];

	const onChange = (key: string, value: any) => {
		const armor: any = armorItem;
		armor[key] = value;
		setArmorItem(armor);
	};

	const currentArmor = () => {
		const a = armorItem;
		if (a.head) return 'head';
		if (a.torso) return 'torso';
		if (a.arms) return 'arms';
		if (a.legs) return 'legs';
		return null;
	};

	const setArmor = (key: string) => {
		const a: any = armorItem;
		a.head = null;
		a.torso = null;
		a.arms = null;
		a.legs = null;
		a[key] = true;
		setArmorItem(a);
	};

	const armorFormFields = (
		<>
			<Autocomplete
				itemValue="name"
				items={armorCatalogue}
				value={search}
				valueSetter={setSearch}
				onSelect={setArmorItem}
			/>
			<FormItem>
				<label>Name: </label>
				<input type="text" value={armorItem.name} onChange={(e) => onChange('name', e.target.value)} />
			</FormItem>
			<FormItem>
				<label>
					<input
						type="checkbox"
						checked={armorItem.isHard}
						onClick={() => {
							onChange('isHard', armorItem.isHard !== null ? !armorItem.isHard : true);
						}}
					/>
					is Hard?
				</label>
			</FormItem>
			<FormItem>
				<label>SP: </label>
				<input
					type="number"
					value={armorItem.stoppingPower}
					onChange={(e) => onChange('stoppingPower', parseInt(e.target.value))}
				/>
			</FormItem>
			<FormItem>
				<label>EV: </label>
				<input
					type="number"
					value={armorItem.encumberanceValue}
					onChange={(e) => onChange('encumberanceValue', parseInt(e.target.value))}
				/>
			</FormItem>
			<FormItem>
				<label>Type: </label>
				<Dropdown options={positions} value={currentArmor()} onChange={(e) => setArmor(e.value)} />
			</FormItem>
		</>
	);

	const armorVal = () => {
		if (
			armorItem.name &&
			armorItem.stoppingPower &&
			(armorItem.encumberanceValue || armorItem.encumberanceValue === 0) &&
			(armorItem.head || armorItem.torso || armorItem.arms || armorItem.legs)
		)
			return true;
		return 'Form is not valid';
	};

	const onSubmit = () => {
		const chr = ctx.character;
		if (!chr.inventory) chr.inventory = {} as Character['inventory'];
		if (!chr.inventory.armor) chr.inventory.armor = [];
		chr.inventory.armor.push(armorItem);
		ctx.setCharacter({ ...chr });
		props.setSelected(null);
		setArmorItem({} as Armor);
		props.toggleAddItem();
	};

	return <Form formFields={armorFormFields} submitButtonText="Add" validation={armorVal} onSubmit={onSubmit} />;
};

export default ArmorForm;

export const getArmorType = (armor: Armor) => {
	if (armor.head) return 'head';
	if (armor.torso) return 'torso';
	if (armor.arms) return 'arms';
	if (armor.legs) return 'legs';
	return null;
};
