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
	const defaultSkillGroup = categories.map((c) => {
		return skills.filter((s) => s.category === c);
	});
	const [filteredSkills, setFilteredSkills] = React.useState(skills);
	const [groupSkills, setGroupSkills] = React.useState(defaultSkillGroup);
	const [fuzzySearch, setFuzzySearch] = React.useState(null as string);

	React.useEffect(() => {
		const updatedFilteredSkills = getFilteredSkills(skills, fuzzySearch);
		setFilteredSkills(updatedFilteredSkills);
		setGroupSkills(
			categories.map((c) => {
				return updatedFilteredSkills.filter((s) => s.category === c);
			})
		);
	}, [fuzzySearch]);

	const fuzzySearchBar = (
		<div>
			<input
				type="text"
				onChange={(e) => (e.target.value ? setFuzzySearch(e.target.value) : setFuzzySearch(null))}
				placeholder="< search >"
				value={fuzzySearch}
			/>
		</div>
	);

	const showSkillsByGroup = groupSkills.map((c) => {
		return (
			c.length > 0 && (
				<>
					<SkillCategory>{c[0].category}</SkillCategory>
					{c.map((s) => {
						const calculatedValue = calcSkillValue(ctx.character, s);
						return (
							<SkillLineItem>
								<span>
									{s.name}: <strong>{`[ ${s.points} / ${calculatedValue ? calculatedValue : s.points} ]`}</strong>
								</span>
							</SkillLineItem>
						);
					})}
				</>
			)
		);
	});
	return (
		<>
			<h2>Skills: {fuzzySearchBar}</h2>
			<div>{showSkillsByGroup}</div>
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

const SkillCategory = styled.div`
	background-color: #00ccff;
	margin-top: 10px;
	margin-bottom: 20px;
	width: 100%;
	font-size: 28px;
	color: #2e2e2e;
`;

const getFilteredSkills = (skills: Skill[], search: string) => {
	const lowercaseSearch = search ? search.toLowerCase() : null;
	return lowercaseSearch
		? skills.filter(
				(x) => x.name.toLowerCase().includes(lowercaseSearch) || x.category.toLowerCase().includes(lowercaseSearch)
		  )
		: skills;
};

export const categories = ['ATTR', 'BODY', 'COOL/WILL', 'EMPATHY', 'INT', 'REF', 'TECH'];
