// interface Weapon {
// 	isSmartGun: boolean;
// 	accuracyModifier: number;
// }

// var player: {
// 	hasSmartGunLink: boolean;
// 	hasCyberneticsAffectingAttack: boolean;
// };

// var attackModifier = 0;
// var roundUp = (input: number) => input;

// // USER INPUT
// var weapon: Weapon;
// attackModifier += weapon.accuracyModifier;
// if (weapon.isSmartGun && player.hasSmartGunLink) attackModifier += 1;

// // USER INPUT
// var targeting: 'target person' | 'called shot';
// if (targeting == 'called shot') attackModifier -= 4;
// attackModifier += (targeting as any).modifier;

// if (player.hasCyberneticsAffectingAttack) {
// 	// list effects
// 	// USER INPUT
// 	var otherCyberneticModifiers = 0;
// 	attackModifier += otherCyberneticModifiers;
// }

// // USER INPUT
// // show metres
// // show modifier to surpass
// var range: 'point_blank' | 'close' | 'medium' | 'long' | 'extreme';

// // USER INPUT
// var type: 'single' | 'burst' | 'auto';
// if (type == 'burst' && range <= 'medium') attackModifier += 3;

// var autoBullets: number;
// if (type == 'auto') {
// 	var autoBulletModifier = type <= 'close' ? 1 : -1;
// 	attackModifier += roundUp(autoBullets / 10) * autoBulletModifier;
// }

// // USER INPUT
// var roll: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
