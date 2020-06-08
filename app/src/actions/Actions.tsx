import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import styled from 'styled-components';

const Actions = () => {
	const ctx = React.useContext(characterContext);
	const weapons = ctx.character?.inventory?.weapons;

	// add in RUN/LEAP/LIFT

	const weaponsRender = (
		<>
			{WeaponsLegend}
			{weapons?.map((w) => {
				return (
					<WeaponGrid>
						<div>{w.name}</div>
						<div>{w.type}</div>
						<div>{w.accuracy}</div>
						<div>{w.damage}</div>
						<div>{w.shots}</div>
						<div>{w.ROF}</div>
						<div>{w.reliablility}</div>
						<div>{w.range + 'm'}</div>
					</WeaponGrid>
				);
			})}
		</>
	);
	return weapons ? <ActionWrapper>{weaponsRender}</ActionWrapper> : null;
};

export default Actions;

const WeaponGrid = styled.div`
	width: 100%;
	display: grid;
	margin-bottom: 15px;
	grid-template-columns: 25% 15% 8% 20% 8% 8% 8% 8%;
	div {
		box-sizing: border-box;
		border: 1px solid green;
	}
`;

const WeaponLegend = styled(WeaponGrid)`
	margin-bottom: 30px;
`;

const ActionWrapper = styled.div`
	margin-top: 15px;
`;

const WeaponsLegend = (
	<WeaponLegend>
		<div>NAME</div>
		<div>TYPE</div>
		<div>WA</div>
		<div>DMG</div>
		<div>#Shots</div>
		<div>ROF</div>
		<div>REL.</div>
		<div>RANGE</div>
	</WeaponLegend>
);
