import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Wrapper, Form } from "./styles";

class SignIn extends Component {
	state = {
	  password: "",
	  confirmPassword: "",
	  error: "",
	  message: "",
	  token: this.props.match.params.id
	};
  
	handleSignIn = async e => {
		e.preventDefault();
		const { password, confirmPassword, token } = this.state;
		if (!password) {
		  this.setState({ error: "Preencha e-mail e senha para continuar!" });
		}
		if (password !== confirmPassword){
			this.setState({ error: "As senhas não são iguais" });
		} 
		else {
		  try {
			  const email = localStorage.getItem("email");
				const response = await api.post("/auth/reset_password", { email ,password, token });
				login(response.data.token);
				this.props.history.push("/login");

		  } catch (err) {
			this.setState({
			  error:
				"Houve um problema com o login, verifique suas credenciais. T.T"
			});
		  }
		}
	  };

render(){
	return (

		<Wrapper>
			<Form onSubmit={this.handleSignIn}>
				{this.state.error && <p>{this.state.error}</p>}
				{this.state.message && <p className="sucess-message">{this.state.message}</p>}
				<input 
					placeholder="Sua senha" 
					type="password"
					onChange={e => this.setState({ password: e.target.value })}
				/>
				<input 
					placeholder="Confirme sua senha" 
					type="password"
					onChange={e => this.setState({ confirmPassword: e.target.value })}

				/>


				<button type="submit">ENVIAR</button>
				<Link>Ainda não recebeu? <Link to="/register" className="green-text-hyper">Clique aqui</Link></Link>
				<Link to="/login" className="back">Voltar</Link>
			</Form>
		</Wrapper>
	);
}
}
export default withRouter(SignIn);
