import * as React from 'react';
import { Cybernetic } from '../models/cybernetics';
import { characterContext } from '../context/CharacterContext';
import { FormItem } from '../inventory/inventoryForms/GearForm';
import Form from '../common/Form';

export const CyberneticsForm = () => {
	const [cybernetic, setCybernetic] = React.useState<Cybernetic>({} as Cybernetic);
	const ctx = React.useContext(characterContext);

	const onChange = (key: string, value: string) => {
		const numValue = parseInt(value);
		const selectedValue = numValue ?? value;
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
		</>
	);

	return <Form formFields={formFields} submitButtonText="Add" validation={() => {}} onSubmit={() => {}} />;
};
