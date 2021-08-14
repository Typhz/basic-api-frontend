import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100vh;
	justify-content: space-around;
	align-items: center;
	display: flex;
`;

export const Form = styled.form`
	background: #1D1F22;
	width: 35%;
	min-height: 54%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 5px;

    *{
        margin-top: 3%;
    }
	p {
		background-color: #ff3333;
		color: #ebebeb;
		width: 76%;
		margin-bottom: 15px;
		border: 1px solid #ff3333;
		border-radius: 3px;
		padding: 10px;
		text-align: center;
		display: block;
	}
	p.sucess-message{
		background-color: #28AE60;
		color: #ebebeb;
		width: 76%;
		margin-bottom: 15px;
		border: 1px solid #28AE60;
		border-radius: 3px;
		padding: 10px;
		text-align: center;
		display: block;
	}
    input{
		background: #171717;
		color: white;
		width: 76%;
		height: 65px;
		border: none;
		border-radius: 6px;
		padding: 0px 20px;
		box-sizing: border-box;
		font-size: 16px;
    }
    input:focus{
	border: 2px solid #28AE60;
	outline: none;
    } 
    button{
	background: #28AE60;
	color: white;
	width: 76%;
	height: 65px;
	border: none;
	border-radius: 6px;
	font-size: 16px;
	font-weight: bold;
}
	a{
		color: #828282;
	}
	.green-text-hyper{
		text-decoration: none;
		font-weight: bold;
		color: #28AE60;
	}

`;
export const Block = styled.div`
    width: 76%;
	height: 40px;
	margin-top: 2%;
    a{
		color: #28AE60;
		font-weight: 700;
	}
`;


export const InformationPage = styled.div`
	width: 25%;
    h1{
        color: white;
        font-size: 3em;
        word-break: keep-all;
    }


`;

