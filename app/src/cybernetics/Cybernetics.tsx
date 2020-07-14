import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import { TopWrapper, CancelButton, AddButton, InputWrapper, Input } from '../inventory/Inventory';
import { CyberneticsForm } from './CyberneticsForm';

export const Cybernetics = () => {
	const ctx = React.useContext(characterContext);
	const [adding, setAdding] = React.useState(false);

	const toggleAddItem = () => {
		setAdding(!adding);
	};

	return (
		<>
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
			{adding ? <CyberneticsForm /> : null}
		</>
	);
};
