import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import {
	TopWrapper,
	CancelButton,
	AddButton,
	InputWrapper,
	Input,
	CategoryTitle,
	ItemWrapper,
	ItemSection
} from '../inventory/Inventory';
import { CyberneticsForm } from './CyberneticsForm';
import styled from 'styled-components';

export const Cybernetics = () => {
	const ctx = React.useContext(characterContext);
	const [adding, setAdding] = React.useState(false);

	const toggleAddItem = () => {
		setAdding(!adding);
	};

	const cyberneticLegend = (
		<CyberneticLegend>
			<span>Name</span>
			<span>ID</span>
			<span>Description</span>
			<span>HL</span>
		</CyberneticLegend>
	);

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

	const getDefaultCybernetics = () =>
		ctx.character?.inventory?.cybernetics &&
		cyberTypes.map((c) => {
			return ctx.character.inventory.cybernetics.filter((x) => x.type == c);
		});
	const [sortedCybernetics, setSortedCybernetics] = React.useState(getDefaultCybernetics());

	React.useEffect(() => {
		const defaultCybernetics = getDefaultCybernetics();
		setSortedCybernetics(defaultCybernetics);
	}, [ctx.character?.inventory?.cybernetics, adding]);

	const cyberneticsInInventory = (
		<>
			{cyberneticLegend}
			{sortedCybernetics?.map((sortedCybernetic) => {
				return (
					sortedCybernetic?.length > 0 && (
						<>
							<CategoryTitle>{sortedCybernetic[0] && sortedCybernetic[0].type}</CategoryTitle>
							{sortedCybernetic.map((c) => {
								return (
									<ItemWrapper>
										<CyberneticGrid>
											<ItemSection>{c.name}</ItemSection>
											<ItemSection>{c.idCode}</ItemSection>
											<ItemSection>{c.description}</ItemSection>
											<ItemSection>{c.humanityLoss}</ItemSection>
										</CyberneticGrid>
									</ItemWrapper>
								);
							})}
						</>
					)
				);
			})}
		</>
	);

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
			{adding ? <CyberneticsForm toggleAddItem={toggleAddItem} /> : cyberneticsInInventory}
		</>
	);
};

const CyberneticGrid = styled.div`
	display: grid;
	width: 100%;
	margin-bottom: 9px;
	grid-template-columns: 20% 10% 65% 5%;
	span {
		border: 1px solid green;
	}
`;

const CyberneticLegend = styled(CyberneticGrid)`
	margin-bottom: 18px;
`;
