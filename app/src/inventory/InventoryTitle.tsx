import * as React from 'react';
import { characterContext } from '../context/CharacterContext';
import Character from '../models/character';
import styled from 'styled-components';

const InventoryTitle = () => {
	const ctx = React.useContext(characterContext);
	const [currencyChange, setCurrencyChange] = React.useState(0);
	const [moneyError, setMoneyError] = React.useState(false);

	const onCurrencyChange = (e: any) => {
		setCurrencyChange(e.target.value);
	};

	const updateCurrency = (add: boolean) => {
		let change = parseInt(currencyChange.toString());
		if (!add) change *= -1;
		const character = ctx.character;
		if (!character.inventory) {
			character.inventory = {} as Character['inventory'];
			character.inventory.eddies = change;
		} else {
			character.inventory.eddies = character.inventory.eddies
				? parseInt(character.inventory.eddies.toString()) + change
				: change;
		}
		if (character.inventory.eddies < 0) {
			character.inventory.eddies -= change;
			setMoneyError(true);
			return;
		}
		ctx.setCharacter({ ...character });
		setMoneyError(false);
		setCurrencyChange(0);
	};

	const MoneyInput = (
		<MoneyInputWrapper>
			<ClickButton onClick={() => updateCurrency(true)}>+</ClickButton>
			{moneyError ? (
				<CurrencyInputError type="number" value={currencyChange} onChange={onCurrencyChange} />
			) : (
				<CurrencyInput type="number" value={currencyChange} onChange={onCurrencyChange} />
			)}
			<ClickButton onClick={() => updateCurrency(false)}>-</ClickButton>
		</MoneyInputWrapper>
	);

	const InventoryTitle = (
		<GearTitleWrapper>
			<h1>INVTRY</h1>
			<MoneyWrapper>
				<Eddies>€${ctx.character.inventory?.eddies ? ctx.character.inventory.eddies : 0}</Eddies>
				{MoneyInput}
			</MoneyWrapper>
		</GearTitleWrapper>
	);

	return InventoryTitle;
};

export default InventoryTitle;

const GearTitleWrapper = styled.div`
	border-bottom: 1px solid blue;
	width: 100%;
	height: 15%;
	min-height: 90px;
	> h1 {
		float: left;
		max-width: 50%;
		&:last-of-type {
			float: left;
		}
	}
`;

const MoneyInputWrapper = styled.div`
	max-width: 100px;
	float: left;
`;
const ClickButton = styled.div`
	height: 30px;
	width: 30px;
	font-size: 24px;
	border: 1px solid blue;
	cursor: pointer;
	margin: auto;
	text-align: center;
`;
const CurrencyInput = styled.input`
	width: 100%;
	font-size: 18px;
`;

const CurrencyInputError = styled(CurrencyInput)`
	background-color: red;
	color: white;
`;

const Eddies = styled.h1`
	min-width: 115px;
	float: left;
	margin-right: 15px;
`;

const MoneyWrapper = styled.div`
	float: right;
	margin-right: 15px;
	height: 100%;
`;
