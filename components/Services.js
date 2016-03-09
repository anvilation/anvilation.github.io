import React,  { Component } from 'react';
import marked from 'marked';
class Services extends Component {
	rawMarkup() {
    	let rawMarkup = marked(this.props.service.Description, {sanitize: true});
    	return { __html: rawMarkup };
  	}
	
	
	render(){
		return (
			<div className="card panelText">
				<div className="card-block">
					<h4 className="card-title"><span className={this.props.service.Icon}></span> {this.props.service.Name}</h4>
					<p className="card-text">
						<span dangerouslySetInnerHTML={this.rawMarkup()} />

					</p>
					
				</div>
			</div>
			
		)
		
	}
}

export default Services
	
