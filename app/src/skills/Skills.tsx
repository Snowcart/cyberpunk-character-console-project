import { characterContext } from '../context/CharacterContext';
import { useContext } from 'react';
import Character from '../models/character';
import { Skill, getSkillsForCharacters, getSpecialSkillsForRole } from '../models/Skill';
import { getEmpathy } from '../stats/Stats';
import * as React from 'react';
import styled from 'styled-components';

const Skills = () => {
	const ctx = useContext(characterContext);
	const skills = ctx.character.skills ?? getSkillsForCharacters();
	const defaultSkillGroup = categories.map((c) => {
		return skills.filter((s) => s.category === c);
	});
	const [groupSkills, setGroupSkills] = React.useState(defaultSkillGroup);
	const [fuzzySearch, setFuzzySearch] = React.useState(null as string);

	React.useEffect(() => {
		ctx.setCharacter({
			...ctx.character,
			specialSkill:
				getSpecialSkillsForRole(ctx.character.role)?.name !== null
					? ctx.character.specialSkill?.name === getSpecialSkillsForRole(ctx.character.role)?.name
						? ctx.character.specialSkill
						: getSpecialSkillsForRole(ctx.character.role)
					: getSpecialSkillsForRole(ctx.character.role)
		});
	}, [ctx.character.role]);

	React.useEffect(() => {
		const updatedFilteredSkills = getFilteredSkills(
			skills.concat(
				ctx.character.specialSkill?.name === getSpecialSkillsForRole(ctx.character.role)?.name
					? ctx.character.specialSkill
					: ctx.character.role
					? getSpecialSkillsForRole(ctx.character.role)
					: ({} as Skill)
			),
			fuzzySearch
		);
		if (!ctx.character.skills) ctx.setCharacter({ ...ctx.character, skills: skills });
		setGroupSkills(
			categories.map((c) => {
				return updatedFilteredSkills.filter((s) => s?.category === c);
			})
		);
	}, [fuzzySearch, ctx.character.role]);

	const editSkill = (e: any, name: string) => {
		const value = e.target.value ? (parseInt(e.target.value) > 10 ? 10 : parseInt(e.target.value)) : null;
		const char = ctx.character;
		if (char.specialSkill?.name === name) {
			char.specialSkill.points = value;
		} else char.skills.find((x) => x.name === name).points = value;
		ctx.setCharacter({
			...ctx.character
		});
	};

	const fuzzySearchBar = (
		<FuzzySearchBar>
			<input
				type="text"
				onChange={(e) => (e.target.value ? setFuzzySearch(e.target.value) : setFuzzySearch(null))}
				placeholder="< search >"
				value={fuzzySearch}
			/>
		</FuzzySearchBar>
	);

	const statValue = (s: Skill, calculatedValue: number) => {
		return ctx.editable ? (
			<>
				{s.name}: [{' '}
				<SkillInput type="number" onChange={(e) => editSkill(e, s.name)} value={parseInt(s.points.toString())} /> ]
			</>
		) : (
			<>
				{s.name}: <strong>{`[ ${s.points} / ${calculatedValue ? calculatedValue : s.points} ]`}</strong>
			</>
		);
	};

	const showSkillsByGroup = groupSkills.map((c) => {
		return (
			c.length > 0 && (
				<>
					<SkillCategory>{c[0].category}</SkillCategory>
					{c.map((s) => {
						const calculatedValue = calcSkillValue(ctx.character, s);
						return (
							<SkillLineItem>
								<span>{statValue(s, calculatedValue)}</span>
							</SkillLineItem>
						);
					})}
				</>
			)
		);
	});
	return (
		<>
			<h2>{fuzzySearchBar}</h2>
			<div>{showSkillsByGroup}</div>
		</>
	);
};

export default Skills;

const calcSkillValue = (character: Character, skill: Skill) => {
	skill.points = skill.points ? skill.points : 0;
	switch (skill.category) {
		case 'ATTR':
			return parseInt(skill.points.toString()) + parseInt(character.stats?.attractiveness?.toString()); // TS is absolute trashhhhhhh
		case 'BODY':
			return parseInt(skill.points.toString()) + parseInt(character.stats?.body?.toString());
		case 'COOL/WILL':
			return parseInt(skill.points.toString()) + parseInt(character.stats?.cool?.toString());
		case 'EMPATHY':
			return (
				parseInt(skill.points.toString()) + getEmpathy(character) ?? parseInt(character.stats?.empathy?.toString())
			);
		case 'INT':
			return parseInt(skill.points.toString()) + parseInt(character.stats?.intelligence?.toString());
		case 'REF':
			return parseInt(skill.points.toString()) + parseInt(character.stats?.reflex?.toString());
		case 'TECH':
			return parseInt(skill.points.toString()) + parseInt(character.stats?.tech?.toString());
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
	margin-top: 20px;
	margin-bottom: 30px;
	width: 100%;
	font-size: 28px;
	color: #2e2e2e;
`;

const SkillInput = styled.input`
	max-width: 50px;
	font-size: 24px;
`;

const FuzzySearchBar = styled.div`
	font-size: 24px;
	width: 100%;
	input {
		width: 100%;
		font-size: 24px;
	}
`;

const getFilteredSkills = (skills: Skill[], search: string) => {
	const lowercaseSearch = search ? search.toLowerCase() : null;
	return lowercaseSearch
		? skills.filter(
				(x) => x.name?.toLowerCase().includes(lowercaseSearch) || x.category?.toLowerCase().includes(lowercaseSearch)
		  )
		: skills;
};

export const categories = ['ROLE', 'ATTR', 'BODY', 'COOL/WILL', 'EMPATHY', 'INT', 'REF', 'TECH'];
