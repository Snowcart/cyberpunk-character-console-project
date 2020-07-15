import * as React from 'react';
import { Cybernetic } from '../models/cybernetics';
import { characterContext } from '../context/CharacterContext';
import { FormItem } from '../inventory/inventoryForms/GearForm';
import Form from '../common/Form';
import Dropdown from 'react-dropdown';
import Character from '../models/Character';

export const CyberneticsForm = (props: Props) => {
	const [cybernetic, setCybernetic] = React.useState<Cybernetic>({} as Cybernetic);
	const ctx = React.useContext(characterContext);

	const onChange = (key: string, value: string) => {
		const numValue = parseInt(value);
		const selectedValue = isNaN(numValue) ? value : numValue;
		// TS hack
		const updatedCybernetic: any = cybernetic;
		updatedCybernetic[key] = selectedValue;
		setCybernetic(updatedCybernetic);
	};

	const cyberTypes = [
		'Fashionware',
		'Neuroware',
		'Implants',
		'Bioware',
		'Cyberweapons',
		'Cyberoptic',
		'Cyberaudio',
		'Cyberlimb'
	];

	const formFields = (
		<>
			<FormItem>
				<label>Name: </label>
				<input type="text" value={cybernetic.name} onChange={(e) => onChange('name', e.target.value)} />
			</FormItem>
			<FormItem>
				<label>Type: </label>
				<Dropdown options={cyberTypes} onChange={(e) => onChange('type', e.value)} />
			</FormItem>
			<FormItem>
				<label>Id Code: </label>
				<input type="text" value={cybernetic.idCode} onChange={(e) => onChange('idCode', e.target.value)} />
			</FormItem>
			<FormItem>
				<label>Description: </label>
				<input type="text" value={cybernetic.description} onChange={(e) => onChange('description', e.target.value)} />
			</FormItem>
			<FormItem>
				<label>Humanity Loss</label>
				<input
					type="number"
					value={cybernetic.humanityLoss}
					onChange={(e) => onChange('humanityLoss', e.target.value)}
				/>
			</FormItem>
		</>
	);

	const formValidation = () => {
		if (cybernetic.name && cybernetic.idCode && cybernetic.description && cybernetic.type && cybernetic.humanityLoss)
			return true;
		return 'Form is not valid';
	};

	const onSubmit = () => {
		const chr = ctx.character;
		if (!chr.inventory) chr.inventory = {} as Character['inventory'];
		if (!chr.inventory.cybernetics) chr.inventory.cybernetics = [];
		chr.inventory.cybernetics.push(cybernetic);
		ctx.setCharacter({ ...chr });
		setCybernetic({} as Cybernetic);
		props.toggleAddItem();
	};

	return <Form formFields={formFields} submitButtonText="Add" validation={formValidation} onSubmit={onSubmit} />;
};

interface Props {
	toggleAddItem: () => void;
}
