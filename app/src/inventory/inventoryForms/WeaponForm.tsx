import { FormProps, FormItem } from './GearForm';
import * as React from 'react';
import { characterContext } from '../../context/CharacterContext';
import Dropdown from 'react-dropdown';
import Weapon from '../../models/weapon';
import Character from '../../models/Character';
import Form from '../../common/Form';

const WeaponForm = (props: FormProps) => {
	const [weaponItem, setWeaponItem] = React.useState({} as Weapon);
	const ctx = React.useContext(characterContext);

	const onChange = (key: string, value: any) => {
		const weapon: any = weaponItem; // typescript can go to hell for the sentencing.
		weapon[key] = value;
		setWeaponItem(weapon);
	};

	const weaponTypes = ['Pistol', 'SMG', 'Rifle', 'Shotgun', 'Heavy', 'Melee', 'Exotic'];
	const concealability = ['Jacket', 'Pocket', 'None', 'NA'];
	const reliability = ['VR', 'SR', 'UR'];
	const weaponFormFields = (
		<>
			<FormItem>
				<label>Type: </label>
				<Dropdown options={weaponTypes} value={weaponItem.type} onChange={(e) => onChange('type', e.value)} />
			</FormItem>
			<FormItem>
				<label>Name: </label>
				<input type="text" value={weaponItem.name} onChange={(e) => onChange('name', e.target.value)} />
			</FormItem>
			<FormItem>
				<label>DMG: </label>
				<input type="text" value={weaponItem.damage} onChange={(e) => onChange('damage', e.target.value)} />
			</FormItem>
			<FormItem>
				<label>RNG: </label>
				<input type="number" value={weaponItem.range} onChange={(e) => onChange('range', parseInt(e.target.value))} />
			</FormItem>
			<FormItem>
				<label>ROF: </label>
				<input type="number" value={weaponItem.ROF} onChange={(e) => onChange('ROF', parseInt(e.target.value))} />
			</FormItem>
			<FormItem>
				<label>Shots: </label>
				<input type="number" value={weaponItem.shots} onChange={(e) => onChange('shots', parseInt(e.target.value))} />
			</FormItem>
			<FormItem>
				<label>Clip: </label>
				<input type="number" value={weaponItem.clip} onChange={(e) => onChange('clip', parseInt(e.target.value))} />
			</FormItem>
			<FormItem>
				<label>Conceal: </label>
				<Dropdown
					options={concealability}
					value={weaponItem.concealability}
					onChange={(e) => onChange('concealability', e.value)}
				/>
			</FormItem>
			<FormItem>
				<label>Accuracy: </label>
				<input
					type="number"
					value={weaponItem.accuracy}
					onChange={(e) => onChange('accuracy', parseInt(e.target.value))}
				/>
			</FormItem>
			<FormItem>
				<label>Reliability: </label>
				<Dropdown
					options={reliability}
					value={weaponItem.reliablility}
					onChange={(e) => onChange('reliablility', e.value)}
				/>
			</FormItem>
			<FormItem>
				<label>
					<input
						type="checkbox"
						checked={weaponItem.isSmartgun}
						onClick={() => {
							onChange('isSmartgun', weaponItem.isSmartgun !== null ? !weaponItem.isSmartgun : true);
						}}
					/>
					- is Smartgun?
				</label>
			</FormItem>
		</>
	);

	const weaponVal = () => {
		console.log(weaponItem);
		if (
			weaponItem.name &&
			weaponItem.type &&
			weaponItem.damage &&
			weaponItem.range &&
			weaponItem.ROF &&
			weaponItem.shots &&
			weaponItem.clip &&
			weaponItem.concealability &&
			weaponItem.accuracy &&
			weaponItem.reliablility
		)
			return true;
		return 'Form is not valid.';
	};

	const weaponSubmit = () => {
		const chr = ctx.character;
		if (!chr.inventory) chr.inventory = {} as Character['inventory'];
		if (!chr.inventory.weapons) chr.inventory.weapons = [];
		chr.inventory.weapons.push(weaponItem);
		ctx.setCharacter({ ...chr });
		props.setSelected(null);
		setWeaponItem({} as Weapon);
		props.toggleAddItem();
	};
	return <Form formFields={weaponFormFields} submitButtonText="Add" validation={weaponVal} onSubmit={weaponSubmit} />;
};

export default WeaponForm;
