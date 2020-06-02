import { characterContext } from '../context/CharacterContext';
import { useContext } from 'react';
import Character from '../models/character';
import { Skill, getSkillsForCharacters } from '../models/Skill';
import { getEmpathy } from '../stats/Stats';
import * as React from 'react';
import styled from 'styled-components';

const Skills = () => {
	const ctx = useContext(characterContext);
	const skills = ctx.character.skills ?? getSkillsForCharacters();
	const showSkills = skills.map((s) => {
		const calculatedValue = calcSkillValue(ctx.character, s);
		return (
			<SkillLineItem>
				<span>
					{s.name}: <strong>{`[ ${s.points} / ${calculatedValue ? calculatedValue : s.points} ]`}</strong>
				</span>
			</SkillLineItem>
		);
	});
	return (
		<>
			<h2>Stats: </h2>
			<div>{showSkills}</div>
		</>
	);
};

export default Skills;

const calcSkillValue = (character: Character, skill: Skill) => {
	switch (skill.category) {
		case 'ATTR':
			return skill.points + parseInt(character.stats.attractiveness?.toString()); // TS is absolute trashhhhhhh
		case 'BODY':
			return skill.points + parseInt(character.stats.body?.toString());
		case 'COOL/WILL':
			return skill.points + parseInt(character.stats.cool?.toString());
		case 'EMPATHY':
			return skill.points + getEmpathy(character) ?? parseInt(character.stats.empathy?.toString());
		case 'INT':
			return skill.points + parseInt(character.stats.intelligence?.toString());
		case 'REF':
			return skill.points + parseInt(character.stats.reflex?.toString());
		case 'TECH':
			return skill.points + parseInt(character.stats.tech?.toString());
		default:
			return skill.points;
	}
};

const SkillLineItem = styled.div`
	margin-top: 15px;
	font-size: 24px;
`;
