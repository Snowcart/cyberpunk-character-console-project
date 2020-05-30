import skills from './skills';
import Stats from './stats';
import Cybernetics from './cybernetics';
import Armor from './armor';
import Roles from './roles';
import Weapon from './weapon';

export default class Character {
	name: string;
	role: Roles;
	characterPoints: number;
	reputation: number;

	stats: Stats;

	getRun = () => this.stats.movementAbility * 3;
	getLeap = () => (this.stats.movementAbility * 3) / 4;
	getLift = () => this.stats.movementAbility * 40;
	getBTM = () => {
		const body = this.stats.body;
		if (body <= 2) return 0;
		if (body <= 4) return -1;
		if (body <= 7) return -2;
		if (body <= 9) return -3;
		if (body == 10) return -4;
		if (body >= 11) return -5;
	};
	getHumanity = () => this.stats.empathy * 10 - this.inventory.cybernetics.reduce((s, c) => (s += c.humanityLoss), 0);
	getEmpathy = () => Math.floor(this.getHumanity() / 10);

	wounds: number;
	getCurrentWoundType = () => Math.ceil(this.wounds / 4);
	getSave = () => this.stats.body - this.getCurrentWoundType();
	getDeathSave = () => this.stats.body - Math.max(this.getCurrentWoundType() - 3, 0);

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

	private calculateLocationSp = (location: 'head' | 'torso' | 'arms' | 'legs') => {
		const armors = this.inventory.armor.filter((a) => a[location]).sort((a, b) => a.stoppingPower - b.stoppingPower);
	};

	private bonusSp = (diff: number) => {
		if (diff <= 4) return 5;
		if (diff <= 8) return 4;
		if (diff <= 14) return 3;
		if (diff <= 20) return 2;
		if (diff <= 26) return 1;
		return 0;
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
