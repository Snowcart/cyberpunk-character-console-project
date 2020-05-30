import Character from '../models/Character';

export const blazeRunner: Character = Object.assign(new Character(), {
	name: '420Bl@zeRunn3r',
	role: 'Netrunner',
	characterPoints: 67,
	reputation: 2,

	stats: {
		intelligence: 10,
		reflex: 7,
		tech: 8,
		cool: 6,
		attractiveness: 6,
		luck: 7,
		movementAbility: 6,
		body: 7,
		empathy: 10
	},

	wounds: 1,

	skills: {
		specialAbility: { name: 'Interface', value: 9, ip: 3 },
		list: {
			'Basic Tech': { value: 7, ip: 0 },
			Programming: { value: 6, ip: 0 },
			'Awareness/Notice': { value: 7, ip: 0 },
			'System Knowledge': { value: 7, ip: 0 },
			CyberTech: { value: 4, ip: 0 },
			Handgun: { value: 7, ip: 0 },
			'First Aid': { value: 6, ip: 0 },
			Stealth: { value: 4, ip: 0 }
		}
	},

	currentArmor: {
		head: {
			damage: 0
		},
		torso: {
			damage: 0
		},
		rightArm: {
			damage: 0
		},
		leftArm: {
			damage: 0
		},
		rightLeg: {
			damage: 1
		},
		leftLeg: {
			damage: 1
		}
	},

	inventory: {
		cybernetics: [
			{ name: 'Basic Processor', humanityLoss: 1, equipped: true, details: null },
			{
				name: 'Smartgun Link',
				humanityLoss: 2,
				equipped: true,
				details: null,
				adjustments: [{ target: 'Smartgun', type: 'addition', value: 2 }]
			},
			{ name: 'Interface Plugs', humanityLoss: 6, equipped: true, details: null },
			{ name: 'Techhair', humanityLoss: 2, equipped: true, details: null },
			{ name: 'Chipwear Socket', humanityLoss: 3, equipped: true, details: null }
		],
		armor: [
			{
				name: 'Light Armor jacket',
				isHard: false,
				stoppingPower: 14,
				encumberanceValue: 0,
				cost: 150,
				torso: true,
				arms: true,
				equipped: true
			},
			{
				name: 'Steel helmet',
				isHard: true,
				stoppingPower: 14,
				encumberanceValue: 0,
				cost: 20,
				head: true,
				equipped: true
			},
			{
				name: 'Leather Pants',
				isHard: false,
				stoppingPower: 10,
				encumberanceValue: 0,
				cost: 20,
				legs: true,
				equipped: true
			}
		],
		weapons: [
			{
				name: 'Federated Arms X-22',
				type: 'Pistol',
				damage: '1d6+1',
				range: 50,
				ROF: 2,
				shots: 2,
				clip: 10,
				ammo: '6mm',
				concealability: 'Pocket',
				accuracy: 0,
				reliablility: 'ST',
				cost: 150,
				isSmartgun: true,
				equipped: true
			},
			{
				name: 'Dai Lung Streetmaster',
				type: 'Pistol',
				damage: '2d6+3',
				range: 50,
				ROF: 2,
				shots: 2,
				clip: 12,
				ammo: '10mm',
				concealability: 'Jacket',
				accuracy: 0,
				reliablility: 'UR',
				cost: 250,
				isSmartgun: true,
				equipped: true
			}
		],
		gear: [
			{ name: 'City Car', count: 1, cost: 2000 },
			{ name: 'First Aid Kit', count: 3, cost: 10 },
			{ name: 'Corp Clothes', count: 1, cost: 300 },
			{ name: 'Soda', count: 24, cost: 24 },
			{ name: 'Voice Modulator', count: 1, cost: null }
		]
	},

	style: {
		clothes: 'Black leathersFace mask',
		hair: 'Blond Flop Top',
		affectations: '',
		ethnicity: 'Caucasian',
		language: ''
	},
	motivations: {
		traits: 'Friendly and Outgoing',
		valuedPerson: 'Mum',
		valueMost: 'Love',
		valuedPossession: '',
		attitude: ''
	},
	lifeDetails: `Childhood Enemy
	They accused me of cowardice
	I Hate Them
	Go into murderous killing rage and rip their face off
	They can throw an entire goverenment agency at me`
});
