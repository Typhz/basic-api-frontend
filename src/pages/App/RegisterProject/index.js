import React from "react";
import Navbar from '../components/NavBar'
import {  DashBoard } from "../styles";
import { Form } from "../../../components/Form"
import { Component } from "react";
import api from "../../../services/api"
export default class App extends Component{
	state = {
		title: "",
		description: "",
		error: ""
	  };

	  handlePostProject = async e => {
		  e.preventDefault();
		  const { title, description } = this.state;
		  if (!title || !description) {
			this.setState({ error: "Preencha o Titulo e descrição para continuar!" });
		  }else {
			  try {
				  await api.post("/projects", { title, description });
				  this.props.history.push("/app");
			  }catch (err) {
				  this.setState({
					  error: "Houve um problema ao enviar a requisição, por favor tente mais tarde"
				  });
			  }
		  }
		};
	render(){
		return(
			<div>
				<Navbar/>
				<DashBoard center>
					<Form onSubmit={this.handlePostProject}>
						{this.state.error && <p>{this.state.error}</p>}
						<input 
							placeholder="Titulo" 
							type="text"
							onChange={e => this.setState({ title: e.target.value })}
						/>
						<input 
							placeholder="Descrição" 
							type="text"
							onChange={e => this.setState({ description: e.target.value })}
						/>
						<button type="submit">Enviar</button>

					</Form>
				</DashBoard>
			</div>
		);
	}
}