import * as React from 'react';
import { characterContext } from '../models/Context/CharacterContext';
import styled from 'styled-components';

const Title = () => {
	const characterCtx = React.useContext(characterContext);

	const TitleBar = styled.div`
		width: 100%;
		height: 100px;
		border-bottom: 2px solid #00ccff;
		box-shadow: 2px 2px #00ffff;
	`;

	const Button = styled.button`
		float: right;
	`;

	const Heading = styled.h1`
		color: #00ccff;
		text-shadow: 2px 1px #00ffff;
		display: inline-block;
		margin: auto 32px auto;
		font-size: 64px;
		height: 100%;
		vertical-align: middle;
	`;

	const titleBar = (
		<TitleBar>
			<Heading> CCCP </Heading>
			<Heading>{characterCtx.character.name}</Heading>
			<Button>Import</Button>
			<Button>Export</Button>
		</TitleBar>
	);

	return titleBar;
};

export default Title;
