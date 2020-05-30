import skills from './skills';
import Stats from './stats';

export default interface Character {
	name: string;
	role: Roles;
	characterPoints: number;

	stats: Stats;
	//// Calced
	//Run
	//Leap
	//Lift
	//Save
	//BTM

	wounds: number;
	currentWoundType: number; //1-8? light -> mortal 6

	skills: {
		specialAbility: number;

		list: [{ [key in keyof typeof skills]: { value: number; ip: number } }];
	};

	// Todo: figure out custom languages or expert x or martial arts
	// Todo: figure out complete custom skill

	inventory: {
		cybernetics: {};

		armor: [];

		weapons: Weapon[];

		gear: [
			{
				name: string;
				cost: number;
			}
		];
	};
}

interface Weapon {
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
}

type Roles = 'Solo' | 'Rocker' | 'Netrunner' | 'Media' | 'Nomad' | 'Fixer' | 'Cop' | 'Corp' | 'Techie' | 'Medtechie';

const specialAbilityNames: { [key in Roles]: string } = {
	Solo: 'Combat Sense',
	Rocker: 'Charismatic Leadership',
	Netrunner: 'Interface',
	Media: 'Credibility',
	Nomad: 'Family',
	Fixer: 'Streatdeal',
	Cop: 'Authority',
	Corp: 'Resources',
	Techie: 'Jury Rig',
	Medtechie: 'Medical Tech'
};
