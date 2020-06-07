import * as React from 'react';
import styled from 'styled-components';

const Form = (props: FormProps) => {
	const [validationMessage, setValidationMessage] = React.useState(null as string);
	const handleFormSubmit = () => {
		console.log('running form submit');
		const validationReturn = props.validation();
		console.log(validationReturn);
		if (typeof validationReturn === 'string') {
			setValidationMessage(validationReturn);
			return;
		}
		if (validationReturn === true) {
			props.onSubmit();
		}
	};
	return (
		<div>
			{props.formFields}
			{validationMessage && <Validation>{validationMessage}</Validation>}
			<SubmitButton onClick={handleFormSubmit}>{props.submitButtonText}</SubmitButton>
		</div>
	);
};

export default Form;

interface FormProps {
	formFields: JSX.Element;
	submitButtonText: string;
	validation: () => any;
	onSubmit: () => void;
}

const SubmitButton = styled.div`
	border: 1px solid blue;
	border-radius: 2px;
	background-color: purple;
	height: 40px;
	width: 50px;
	cursor: pointer;
`;

const Validation = styled.div`
	color: red;
`;
