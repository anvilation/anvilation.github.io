import React,  { Component } from 'react';
import ContactMethod from './ContactMethod';

class Footer extends Component {

	render(){
		return (
			<nav className="navbar navbar-light bg-faded">
			  	<a className="navbar-brand ANVILATION" href="http://www.anvilation.com" target="blank">ANVILATION</a>
			
				<span className="text-muted" >Melbourne, Australia</span>
				<ul className="nav navbar-nav">
					{
						this.props.contactMethods.map((contact) => {
							return <ContactMethod key={contact.id} contact={contact} actions={this.props.actions} />
						})
			
					}
				</ul>
			</nav>
			
		)
		
	}
}

export default Footer
	
