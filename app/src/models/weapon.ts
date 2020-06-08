import Item from './item';

export default interface Weapon extends Item {
	type: 'Pistol' | 'SMG' | 'Rifle' | 'Shotgun' | 'Heavy' | 'Melee' | 'Exotic';
	damage: string;
	range: number;
	ROF: number;
	shots: number;
	clip: number;
	ammo: string;
	concealability: 'Jacket' | 'Pocket' | 'None' | 'NA';
	accuracy: number;
	reliablility: 'VR' | 'ST' | 'UR';
	armorPeircing?: string; // Todo: string literal of AP types
	isSmartgun: boolean;
	equipped: boolean;
}
