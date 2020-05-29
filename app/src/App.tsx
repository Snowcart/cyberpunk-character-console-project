import * as React from 'react';
import { BrowserRouter, useHistory, useLocation } from 'react-router-dom';

export default () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

const App = () => (
	<h1>Hello world</h1>
);
