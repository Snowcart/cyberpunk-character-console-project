import skills from './skills';
import Stats from './stats';
import Cybernetics from './cybernetics';
import Armor from './armor';
import Roles from './roles';
import Weapon from './weapon';

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
	//Calc: currentWoundType: number; //1-8? light -> mortal 6

	skills: {
		specialAbility: { name: string; value: number; ip: number };

		list: { [key: string]: { value: number; ip: number } }; // Change key to only be skills
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
		cybernetics: Cybernetics[];

		armor: Armor[];

		weapons: Weapon[];

		gear: {
			name: string;
			count: number;
			cost: number;
		}[];
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
