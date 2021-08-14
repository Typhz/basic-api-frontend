import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
	height: 15vh;
	padding: 0 5%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	display: flex;
	.icon{
		font-size: 28px;
		margin: 0px 8px;
	}
`;
export const StyledLink = styled(Link)`
	color: white;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;