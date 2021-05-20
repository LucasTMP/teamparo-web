import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,400&display=swap');
    * {
		font-family: 'Montserrat', sans-serif;
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		min-height: 100%;
	}
	
	body {
		-webkit-font-smoothing: antialiased !important;
	}

	body, input, button, a {
		font-family: 'Montserrat', sans-serif;
		color: #222;
		font-size: 14px;
	}

	button {
		cursor: pointer;
	}
`;
