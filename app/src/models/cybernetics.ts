import skills from './skills';
import Stats from './stats';

export default interface Cybernetics {
	name: string;
	humanityLoss: number; //This changes in db list for dice rolls
	details: string;
	equipped: boolean;
	adjustments?: [
		{
			target: Targets;
			type: 'addition' | 'multiplication' | 'override';
			value: number;
			situational?: boolean;
			notes?: string;
		}
	];
}

type Targets = keyof Stats | keyof typeof skills | ExtraTargets;

type ExtraTargets = 'Initiative' | 'Leap' | 'Run' | 'Smartgun' | 'Lift';
