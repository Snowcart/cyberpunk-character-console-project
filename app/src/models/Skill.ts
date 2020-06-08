export interface Skill {
	name: string;
	value: number;
	points: number;
	category: 'ATTR' | 'BODY' | 'COOL/WILL' | 'EMPATHY' | 'INT' | 'REF' | 'TECH' | 'ROLE';
	currentIp?: number;
}

export const getSpecialSkillsForRole = (role: string): Skill => {
	const roleLower = role?.toLowerCase();
	if (!role) return null;
	switch (roleLower) {
		case 'net runner':
		case 'netrunner':
			return { name: 'Interface', value: 0, points: 0, category: 'ROLE' };
		case 'fixer':
			return { name: 'Streetdeal', value: 0, points: 0, category: 'ROLE' };
		case 'rockerboy':
		case 'rockergirl':
		case 'rockerthey':
			return { name: 'Charismatic Leadership', value: 0, points: 0, category: 'ROLE' };
		case 'solo':
			return { name: 'Combat Sense', value: 0, points: 0, category: 'ROLE' };
		case 'techie':
			return { name: 'Jury Rig', value: 0, points: 0, category: 'ROLE' };
		case 'medtechie':
			return { name: 'Medical Tech', value: 0, points: 0, category: 'ROLE' };
		case 'media':
			return { name: 'Credibility', value: 0, points: 0, category: 'ROLE' };
		case 'cop':
		case 'pig':
			return { name: 'Authority', value: 0, points: 0, category: 'ROLE' };
		case 'corp':
		case 'corporate':
			return { name: 'Resources', value: 0, points: 0, category: 'ROLE' };
		case 'nomad':
			return { name: 'Family', value: 0, points: 0, category: 'ROLE' };
		default:
			return {} as Skill;
	}
};

export const getSkillsForCharacters = () => {
	const defaultSkills: Skill[] = [
		{ name: 'Personal Grooming', value: 0, points: 0, category: 'ATTR' },
		{ name: 'Wardrobe & Style', value: 0, points: 0, category: 'ATTR' },
		{ name: 'Endurance', value: 0, points: 0, category: 'BODY' },
		{ name: 'Strength Feat', value: 0, points: 0, category: 'BODY' },
		{ name: 'Swimming', value: 0, points: 0, category: 'BODY' },
		{ name: 'Interrogation', value: 0, points: 0, category: 'COOL/WILL' },
		{ name: 'Intimidate', value: 0, points: 0, category: 'COOL/WILL' },
		{ name: 'Oratory', value: 0, points: 0, category: 'COOL/WILL' },
		{ name: 'Resist Torture/Drugs', value: 0, points: 0, category: 'COOL/WILL' },
		{ name: 'Streetwise', value: 0, points: 0, category: 'COOL/WILL' },
		{ name: 'Human Perception', value: 0, points: 0, category: 'EMPATHY' },
		{ name: 'Interview', value: 0, points: 0, category: 'EMPATHY' },
		{ name: 'Leadership', value: 0, points: 0, category: 'EMPATHY' },
		{ name: 'Seduction', value: 0, points: 0, category: 'EMPATHY' },
		{ name: 'Social', value: 0, points: 0, category: 'EMPATHY' },
		{ name: 'Persuasion & Fast Talk', value: 0, points: 0, category: 'EMPATHY' },
		{ name: 'Perform', value: 0, points: 0, category: 'EMPATHY' },
		{ name: 'Accounting', value: 0, points: 0, category: 'INT' },
		{ name: 'Anthropology', value: 0, points: 0, category: 'INT' },
		{ name: 'Awareness/Notice', value: 0, points: 0, category: 'INT' },
		{ name: 'Biology', value: 0, points: 0, category: 'INT' },
		{ name: 'Botany', value: 0, points: 0, category: 'INT' },
		{ name: 'Chemistry', value: 0, points: 0, category: 'INT' },
		{ name: 'Composition', value: 0, points: 0, category: 'INT' },
		{ name: 'Diagnose Illness', value: 0, points: 0, category: 'INT' },
		{ name: 'Education & Gen.Know', value: 0, points: 0, category: 'INT' },
		{ name: 'Expertise', value: 0, points: 0, category: 'INT' },
		{ name: 'Geology', value: 0, points: 0, category: 'INT' },
		{ name: 'Hide/Evade', value: 0, points: 0, category: 'INT' },
		{ name: 'History', value: 0, points: 0, category: 'INT' },
		{ name: 'Language 1', value: 0, points: 0, category: 'INT' },
		{ name: 'Language 2', value: 0, points: 0, category: 'INT' },
		{ name: 'Language 3', value: 0, points: 0, category: 'INT' },
		{ name: 'Library Search', value: 0, points: 0, category: 'INT' },
		{ name: 'Mathematics', value: 0, points: 0, category: 'INT' },
		{ name: 'Physics', value: 0, points: 0, category: 'INT' },
		{ name: 'Programming', value: 0, points: 0, category: 'INT' },
		{ name: 'Shadow/Track', value: 0, points: 0, category: 'INT' },
		{ name: 'Stock Market', value: 0, points: 0, category: 'INT' },
		{ name: 'System Knowledge', value: 0, points: 0, category: 'INT' },
		{ name: 'Teaching', value: 0, points: 0, category: 'INT' },
		{ name: 'Wilderness Survival', value: 0, points: 0, category: 'INT' },
		{ name: 'Zoology', value: 0, points: 0, category: 'INT' },
		{ name: 'Archery', value: 0, points: 0, category: 'REF' },
		{ name: 'Athletics', value: 0, points: 0, category: 'REF' },
		{ name: 'Brawling', value: 0, points: 0, category: 'REF' },
		{ name: 'Dance', value: 0, points: 0, category: 'REF' },
		{ name: 'Dodge & Escape', value: 0, points: 0, category: 'REF' },
		{ name: 'Driving', value: 0, points: 0, category: 'REF' },
		{ name: 'Fencing', value: 0, points: 0, category: 'REF' },
		{ name: 'Handgun', value: 0, points: 0, category: 'REF' },
		{ name: 'Heavy Weapons', value: 0, points: 0, category: 'REF' },
		{ name: 'Martial Art 1', value: 0, points: 0, category: 'REF' },
		{ name: 'Martial Art 2', value: 0, points: 0, category: 'REF' },
		{ name: 'Martial Art 3', value: 0, points: 0, category: 'REF' },
		{ name: 'Melee', value: 0, points: 0, category: 'REF' },
		{ name: 'Motorcycle', value: 0, points: 0, category: 'REF' },
		{ name: 'Operate Hvy.Machinery', value: 0, points: 0, category: 'REF' },
		{ name: 'Pilot(Gyro)', value: 0, points: 0, category: 'REF' },
		{ name: 'Pilot(FixedWing)', value: 0, points: 0, category: 'REF' },
		{ name: 'Pilot(Dirigible)', value: 0, points: 0, category: 'REF' },
		{ name: 'Pilot(Vect.Thrust Vehicle)', value: 0, points: 0, category: 'REF' },
		{ name: 'Rifle', value: 0, points: 0, category: 'REF' },
		{ name: 'Stealth', value: 0, points: 0, category: 'REF' },
		{ name: 'Submachinegun', value: 0, points: 0, category: 'REF' },
		{ name: 'Aero Tech', value: 0, points: 0, category: 'TECH' },
		{ name: 'AV Tech', value: 0, points: 0, category: 'TECH' },
		{ name: 'Basic Tech', value: 0, points: 0, category: 'TECH' },
		{ name: 'Cryotank Operation', value: 0, points: 0, category: 'TECH' },
		{ name: 'Cyberpunk Design', value: 0, points: 0, category: 'TECH' },
		{ name: 'CyberTech', value: 0, points: 0, category: 'TECH' },
		{ name: 'Demolitions', value: 0, points: 0, category: 'TECH' },
		{ name: 'Disguise', value: 0, points: 0, category: 'TECH' },
		{ name: 'Electronics', value: 0, points: 0, category: 'TECH' },
		{ name: 'Elect. Security', value: 0, points: 0, category: 'TECH' },
		{ name: 'First Aid', value: 0, points: 0, category: 'TECH' },
		{ name: 'Forgery', value: 0, points: 0, category: 'TECH' },
		{ name: 'Gyro Tech', value: 0, points: 0, category: 'TECH' },
		{ name: 'Paint or Draw', value: 0, points: 0, category: 'TECH' },
		{ name: 'Photo & Film', value: 0, points: 0, category: 'TECH' },
		{ name: 'Pharmaceuticals', value: 0, points: 0, category: 'TECH' },
		{ name: 'Pick Lock', value: 0, points: 0, category: 'TECH' },
		{ name: 'Pick Pocket', value: 0, points: 0, category: 'TECH' },
		{ name: 'Play Instrument', value: 0, points: 0, category: 'TECH' },
		{ name: 'Weaponsmith', value: 0, points: 0, category: 'TECH' }
	];

	return defaultSkills;
};
