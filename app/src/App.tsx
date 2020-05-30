import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export default () => <App />;

const App = () => {
	const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background-color: #312c36;
	}
	`;

	return (
		<>
			<GlobalStyle />
			<h1>Hello worlds</h1>
		</>
	);
};
