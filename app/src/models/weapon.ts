import Item from './item';

export default interface Weapon extends Item {
	type: 'Pistol' | 'SMG' | 'Rifle' | 'Shotgun' | 'Heavy' | 'Melee' | 'Exotic';
	damage: string;
	range: number;
	ROF: number;
	shots: number;
	// TODO: Remove Clip?? I don't think it is used
	clip?: number;
	ammo: string;
	concealability: 'Jacket' | 'Pocket' | 'Long Coat' | 'None' | 'NA';
	accuracy: number;
	reliability: 'VR' | 'ST' | 'UR' | 'NA';
	armorPeircing?: string; // Todo: string literal of AP types
	isSmartgun?: boolean;
	equipped?: boolean;
	availability?: string;
}
