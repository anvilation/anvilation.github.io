import React,  { Component } from 'react';

class ToDoInput extends Component {
	
	constructor(props, context){
		super(props, context);
		this.state = {
			inputText: ''
		}
	}

	handleChange(event){
		this.setState({
			inputText: event.target.value
		});
	}
	handleSubmit(event){
		event.preventDefault();
		this.props.addTodo(this.state.inputText)
		
	}


	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)} >
					<input 
						type="text" 
						placeholder="To Do Item"
						value={this.state.inputText}
						onChange={this.handleChange.bind(this)}
					/>
					<input type="Submit"  text="Submit" />
				</form>
			</div>
			
		)
		
	}
}

export default ToDoInput