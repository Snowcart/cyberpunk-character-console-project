import * as React from 'react';
import { characterContext } from '../models/Context/CharacterContext';

const Title = () => {
	const characterCtx = React.useContext(characterContext);
	return <h1>{characterCtx.character.name}</h1>;
};

export default Title;
