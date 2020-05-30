import * as React from 'react';
import { characterContext } from '../context/CharacterContext';
import styled from 'styled-components';

const Title = () => {
	const characterCtx = React.useContext(characterContext);

	const onEditButtonClick = () => {
		characterCtx.toggleEditable(characterCtx.editable);
	};

	const onHeadingValueChange = (e: any, name: string) => {
		characterCtx.setCharacter({ ...characterCtx.character, [name]: e.target.value });
	};

	const fields = (
		<>
			<Heading>HANDLE: </Heading>
			<BoldHeading>{characterCtx.character.name}</BoldHeading>
			<Heading>ROLE: </Heading>
			<BoldHeading>{characterCtx.character.role}</BoldHeading>
		</>
	);

	const editableFields = (
		<>
			<Heading>HANDLE: </Heading>
			<Input value={characterCtx.character.name} onChange={(e) => onHeadingValueChange(e, 'name')} />
			<Heading>ROLE: </Heading>
			<Input value={characterCtx.character.role} onChange={(e) => onHeadingValueChange(e, 'role')} />
		</>
	);

	const titleBar = (
		<TitleBar>
			<Heading> CCCP </Heading>
			{characterCtx.editable ? editableFields : fields}
			<Button onClick={() => onEditButtonClick()}>{characterCtx.editable ? 'Finish' : 'Edit'}</Button>
			<Button>Import</Button>
			<Button>Export</Button>
		</TitleBar>
	);

	return titleBar;
};

export default Title;

const TitleBar = styled.div`
	width: 100%;
	height: 100px;
	border-bottom: 2px solid #00ccff;
	box-shadow: 2px 2px #00ffff;
`;

const Button = styled.button`
	float: right;
	cursor: pointer;
`;

const Heading = styled.h1`
	color: #00ccff;
	text-shadow: 2px 1px #00ffff;
	display: inline-block;
	margin-left: 40px;
	height: 100%;
	vertical-align: middle;
	font-size: 42px;
	font-weight: normal;
	max-width: 25%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const BoldHeading = styled(Heading)`
	font-weight: bold;
	margin-left: 0;
`;

const Input = styled.input`
	width: auto;
	max-width: 25%;
	font-size: 42px;
	background-color: #2e2e2e;
	border-color: #00ffff;
	margin: auto;
	color: #00ccff;
`;
