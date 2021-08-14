import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Wrapper, InformationPage } from "./styles";
import { Form, Block } from "../../../components/Form";

class SignIn extends Component {
	state = {
	  email: "",
	  password: "",
	  error: ""
	};
  
	handleSignIn = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		if (!email || !password) {
		  this.setState({ error: "Preencha e-mail e senha para continuar!" });
		}else {
			try {
				const response = await api.post("/auth/authenticate", { email, password });
				login(response.data.token);
				this.props.history.push("/app");
			}catch (err) {
				this.setState({
					error: "Houve um problema com o login, verifique suas credenciais."
				});
			}
		}
	  };

render(){
	return (
		<Wrapper>
			<InformationPage>
				<h1>Faça seu login na plataforma</h1>
			</InformationPage>

			<Form onSubmit={this.handleSignIn}>
				{this.state.error && <p>{this.state.error}</p>}
				<input 
					placeholder="Email" 
					type="email"
					onChange={e => this.setState({ email: e.target.value })}
				/>
				<input 
					placeholder="Sua senha" 
					type="password"
					onChange={e => this.setState({ password: e.target.value })}
				/>
				<Block>
					<Link to="/forgot" className="green-text-hyper">Esqueci minha senha</Link>
				</Block>
				<button type="submit">ENTRAR</button>
				<span>Não tem uma conta? <Link to="/register" className="green-text-hyper">Registre-se</Link></span>
			</Form>
		</Wrapper>
	);
}
}
export default withRouter(SignIn);
