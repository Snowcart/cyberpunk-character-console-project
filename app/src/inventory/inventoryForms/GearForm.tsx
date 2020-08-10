import * as React from 'react';
import Form from '../../common/Form';
import Character, { GearItem } from '../../models/Character';
import { characterContext } from '../../context/CharacterContext';
import styled from 'styled-components';
import Autocomplete from '../../common/Autocomplete';
import gearCatalogue from '../gearCatalogue';

const GearItemForm = (props: FormProps) => {
	const [gearItem, setGearItem] = React.useState({} as GearItem);
	const [search, setSearch] = React.useState('');
	const ctx = React.useContext(characterContext);

	const gearFormFields = (
		<>
			<Autocomplete
				itemValue="name"
				items={gearCatalogue.sort()}
				value={search}
				valueSetter={setSearch}
				onSelect={setGearItem}
			/>

			<FormItem>
				<div>Name: </div>
				<input type="text" value={gearItem.name} onChange={(e) => setGearItem({ ...gearItem, name: e.target.value })} />
			</FormItem>
			<FormItem>
				<div>Desc: </div>
				<textarea value={gearItem.desc} onChange={(e) => setGearItem({ ...gearItem, desc: e.target.value })} />
			</FormItem>
			<FormItem>
				<div># of Item: </div>
				<input
					type="number"
					value={gearItem.count}
					onChange={(e) => setGearItem({ ...gearItem, count: parseInt(e.target.value) })}
				/>
			</FormItem>
		</>
	);

	const gearVal = () => {
		if (gearItem.name && gearItem.desc && gearItem.count) return true;
		return 'Form is not valid.';
	};

	const gearSubmit = () => {
		const chr = ctx.character;
		if (!chr.inventory) chr.inventory = {} as Character['inventory'];
		if (!chr.inventory.gear) chr.inventory.gear = [];
		chr.inventory.gear.push(gearItem);
		ctx.setCharacter({ ...chr });
		props.setSelected(null);
		setGearItem({} as GearItem);
		props.toggleAddItem();
	};
	return <Form formFields={gearFormFields} submitButtonText="Add" validation={gearVal} onSubmit={gearSubmit} />;
};

export interface FormProps {
	setSelected: (value: any) => void;
	toggleAddItem: () => void;
}

export default GearItemForm;

export const FormItem = styled.div`
	width: 100%;
	input {
		margin: auto;
	}
`;
