import { characterContext } from '../context/CharacterContext';
import { useContext } from 'react';
import Character from '../models/character';
import { Skill } from '../models/Skill';
import { getEmpathy } from '../stats/Stats';

const Skills = () => {
	const ctx = useContext(characterContext);
};

export default Skills;

const calcSkillValue = (character: Character, skill: Skill) => {
	switch (skill.category) {
		case 'ATTR':
			return skill.points + character.stats.attractiveness;
		case 'BODY':
			return skill.points + character.stats.body;
		case 'COOL/WILL':
			return skill.points + character.stats.cool;
		case 'EMPATHY':
			return skill.points + getEmpathy(character) ?? character.stats.empathy;
		case 'INT':
			return skill.points + character.stats.intelligence;
		case 'REF':
			return skill.points + character.stats.reflex;
		case 'TECH':
			return skill.points + character.stats.tech;
		default:
			return skill.points;
	}
};
