export default interface Weapon {
	name: string;
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
	cost: number;
	armorPeircing: string; // Todo: string literal of AP types
	equipped: boolean;
}
