import React,  { Component } from 'react';

class ContactMethod extends Component {

	render(){
		return (
			<li className="nav-item">
				<a href={this.props.contact.href}>
					<span className={this.props.contact.icon}></span>
				</a>
			</li>
			
		)
		
	}
}

export default ContactMethod
	
