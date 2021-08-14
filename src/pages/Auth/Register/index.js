import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";
import { Wrapper, InformationPage } from "../Login/styles";
import { Form } from "../../../components/Form";

class SignUp extends Component {
	state = {
		email: "",
		password: "",
		error: ""
	  };
	handleSignUp = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		if (!email || !password) {
		  this.setState({ error: "Preencha todos os dados para se cadastrar" });
		} else {
		  try {
			await api.post("/auth/register", {email, password });
			this.props.history.push("/login");
		  } catch (err) {
			console.log(err);
			this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
		  }
		}
	  };

render(){
	return (
		<Wrapper>
			<InformationPage>
				<h1>Registre-se na plataforma</h1>
			</InformationPage>

			<Form onSubmit={this.handleSignUp}>
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
				<input 
					placeholder="Confirme sua senha" 
					type="password"
					onChange={e => this.setState({ password: e.target.value })}
				/>
				<button type="submit">ENTRAR</button>
				<span>Já tem uma conta? <Link to="/login" className="green-text-hyper">Entrar</Link></span>
			</Form>
		</Wrapper>
	);
}
}
export default withRouter(SignUp);
