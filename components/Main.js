import React,  { Component } from 'react';
import Projects from './Projects';
import Services from './Services';

class Main extends Component {
	
	showProjects(){
		console.log('waddup')
		
	}
	
	
	render(){
		return (
			<div className="container-fluid">
				<div className="row row-eq-height">
					<div className="col-sm-6 projects" >
						<p  className="display-1"><i className="fa fa-github"></i>  Projects</p>
						{
							this.props.projects.map((project) => {
								return <Projects key={project.id} project={project} actions={this.props.actions}  />
							})
						}
						
						
					</div>
					<div className="col-sm-6 services">
						<p   className="display-1"><i className="fa fa-cube"></i> Services</p>
						{
							this.props.services.map((service) => {
								return <Services key={service.id} service={service} actions={this.props.actions}  />
							})
						}						
					</div>
				</div>

		
			</div>
			
		)
		
	}
}

export default Main
