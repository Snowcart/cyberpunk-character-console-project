import * as React from 'react';
import Character from 'src/models/character';

const Title = (props: Props) => {
	const character = React.useContext(props.context);
	character.name = 'Halt!';
	return <h1>{character.name}</h1>;
};

interface Props {
	context: React.Context<Character>;
}

export default Title;
