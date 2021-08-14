import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";
import { Wrapper, Form } from "./styles";

class SignIn extends Component {
	state = {
	  email: "",
	  error: "",
	  message: "",
	};
  
	handleForgotPassword = async e => {
		e.preventDefault();
		const { email } = this.state;
		if (!email) {
		  this.setState({ error: "Preencha e-mail para continuar!" });
		} else {
		  try {
			await api.post("/auth/forgot_password", { email });
			localStorage.setItem("email", email);
			this.setState({
				message:
				  "Certo! Verifique a caixa de email."
			});
		  } catch (err) {
			this.setState({
			  error:
				"Houve um problema ao solicitar a alteração, tente novamente mais tarde."
			});
		  }
		}
	  };

render(){
	return (

		<Wrapper>
			<Form onSubmit={this.handleForgotPassword}>
				{this.state.error && <p>{this.state.error}</p>}
				{this.state.message && <p className="sucess-message">{this.state.message}</p>}
				<input 
					placeholder="Email" 
					type="email"
					onChange={e => this.setState({ email: e.target.value })}
				/>
				<button type="submit">ENVIAR</button>
				<Link>Ainda não recebeu? <Link to="/register" className="green-text-hyper">Clique aqui</Link></Link>
				<Link to="/login">Voltar</Link>
			</Form>
		</Wrapper>
	);
}
}
export default withRouter(SignIn);
