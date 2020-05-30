import Roles from './roles';

const specialAbilityNames: { [key in Roles]: string } = {
	Solo: 'Combat Sense',
	Rocker: 'Charismatic Leadership',
	Netrunner: 'Interface',
	Media: 'Credibility',
	Nomad: 'Family',
	Fixer: 'Streatdeal',
	Cop: 'Authority',
	Corp: 'Resources',
	Techie: 'Jury Rig',
	Medtechie: 'Medical Tech'
};

export default specialAbilityNames;
