import styled from "styled-components";

export const DashBoard = styled.div`
	min-height: 110vh;
	justify-content: ${props => props.center ? "center" : "flex-start"};
	display: ${props => props.center ? "flex" : "block"};
	padding: 0 5%;
	flex-wrap: wrap;

`;
export const WrapperGrid = styled.div`
	grid-template-columns: repeat(auto-fit, minmax(250px, auto));
	grid-auto-rows: 30vh;
	grid-auto-flow: row;
	grid-column-gap: 2%;
	grid-row-gap: 2%;
	display: grid;
	flex-wrap: wrap;
	.card{
		background-color: #1b1b1f;
		padding: 5% 3%;
		border-radius: 6px;
		flex-direction: column;
		justify-content: flex-end;
		display: flex;
	}
`