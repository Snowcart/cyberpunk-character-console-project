import skills from './skills';
import Stats from './stats';
import Cybernetics from './cybernetics';
import Armor from './armor';
import Roles from './roles';

export default interface Character {
	name: string;
	role: Roles;
	characterPoints: number;
	reputation: number;

	stats: Stats;
	//// Calced
	//Run
	//Leap
	//Lift
	//Save
	//BTM
	//Humanity

	wounds: number;
	currentWoundType: number; //1-8? light -> mortal 6

	skills: {
		specialAbility: number;

		list: [{ [key in keyof typeof skills]: { value: number; ip: number } }];
	};

	// Todo: figure out custom languages or expert x or martial arts
	// Todo: figure out complete custom skill

	currentArmor: {
		//Sp calculated
		head: {
			damage: number;
		};
		torso: {
			damage: number;
		};
		rightArm: {
			damage: number;
		};
		leftArm: {
			damage: number;
		};
		rightLeg: {
			damage: number;
		};
		leftLeg: {
			damage: number;
		};
	};

	inventory: {
		cyberwear: Cybernetics[];

		armor: Armor[];

		weapons: Weapon[];

		gear: [
			{
				name: string;
				cost: number;
			}
		];
	};

	//Lifepath
	style: {
		clothes: string;
		hair: string;
		affectations: string;
		ethnicity: string;
		language: string;
	};
	motivations: {
		traits: string;
		valuedPerson: string;
		valueMost: string;
		valuedPossession: string;
		attitude: string;
	};

	lifeDetails: string;
}
