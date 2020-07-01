import { characterContext } from '../context/CharacterContext';
import * as React from 'react';
import styled from 'styled-components';
import Stat from '../stats/Stat';

const Actions = () => {
	const ctx = React.useContext(characterContext);
	const weapons = ctx.character?.inventory?.weapons;

	const actionStatValues = ctx.character?.stats?.movementAbility
		? getActionStats(ctx.character.stats.movementAbility)
		: null;

	const statArray = actionStatValues
		? [
				{ title: 'RUN', value: actionStatValues.run },
				{ title: 'LEAP', value: actionStatValues.leap },
				{ title: 'LIFT', value: actionStatValues.lift }
		  ]
		: null;

	const actionStats = statArray ? (
		<>
			{statArray.map((s) => {
				return <Stat title={s.title} number={s.value} />;
			})}
		</>
	) : null;

	const weaponsRender = (
		<>
			{WeaponsLegend}
			{weapons?.map((w) => {
				console.log(w.isSmartgun);
				return (
					<WeaponGrid>
						<div>
							{w.name} isSmartgun: <input type="checkbox" checked={w.isSmartgun} onClick={null} />
						</div>
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
	return (
		<div>
			{actionStats ? actionStats : null}
			{weapons ? <ActionWrapper>{weaponsRender}</ActionWrapper> : null}
		</div>
	);
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

const getActionStats = (ma: number) => {
	const run = ma * 3;
	const leap = (ma * 3) / 4;
	const lift = ma * 40;

	return { run, leap, lift };
};
