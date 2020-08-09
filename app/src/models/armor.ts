export default interface Armor {
	name: string;
	isHard: boolean;
	stoppingPower: number;
	encumberanceValue: number;
	cost: number;
	head?: boolean;
	torso?: boolean;
	arms?: boolean;
	legs?: boolean;
	equipped?: boolean;
}
