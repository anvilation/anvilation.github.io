import React,  { Component } from 'react';

class Projects extends Component {
	

	render(){
		return (
			<div className="card panelText">
				<div className="card-block">
					<h4 className="card-title">
						{(() => {
							switch (this.props.project.IconType) {
							  case "svg":   return <img src={this.props.project.Icon} alt={this.props.project.Desccription} className="sizeSVG" />;
							  case "fa": return <span><i className={this.props.project.Icon}></i> </span> ;
							  default:      return "";
							}
						 })()}
						{this.props.project.Name}
					</h4>
					<p className="card-text">
						{this.props.project.Desccription}
					</p>
					
				</div>
			</div>
			
		)
		
	}
}

export default Projects
	
