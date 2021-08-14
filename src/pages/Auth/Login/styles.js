import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100vh;
	justify-items: center;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	display: grid;
	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const InformationPage = styled.div`
	width: 80%;
    h1{
        color: white;
        font-size: 3em;
    }
`;

