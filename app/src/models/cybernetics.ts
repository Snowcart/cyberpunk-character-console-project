import skills from './skills';

export default interface Cybernetics {
	name: string;
	humanityLoss: number; //This changes in db list for dice rolls
	details: string;
	equipped: boolean;
	adjustments: [
		{
			skill: keyof typeof skills;
			type: 'addition' | 'multiplication' | 'override';
			value: number;
			situational: boolean;
			notes: string;
		}
	];
}
