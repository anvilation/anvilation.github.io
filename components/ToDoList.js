import React,  { Component } from 'react';
import ToDoItem from './TodoItem'
	
class ToDoList extends Component {

	render(){
		return (
			<ul>

			{
				this.props.todos.map((todo) => {
					return <ToDoItem key={todo.id} todo={todo} actions={this.props.actions} />
				})
			}
			</ul>
			
		)
		
	}
}

export default ToDoList