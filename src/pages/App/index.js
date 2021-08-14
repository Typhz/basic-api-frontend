import React, {useEffect, useState} from "react";
import {  DashBoard, WrapperGrid} from "./styles";

import NavBar from './components/NavBar'
import api from "../../services/api";

export default function App(){
	const [projects, setProjects] = useState([])
	useEffect(() => {
		api.get("/projects").then(({ data }) => {
			setProjects(data.projects)
		});
	}, [])
	return(
		<div>
			<NavBar/>
			<DashBoard>
				<WrapperGrid>
					{projects?.map((project, index) => (
						<div key={index} className="card">
							<h3>{project.title}</h3>
							<p>{project.description}</p>		
						</div>
					))}
				</WrapperGrid>
			</DashBoard>
		</div>
	);
	
}