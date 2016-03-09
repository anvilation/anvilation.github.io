import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';

	
class App extends Component {

  render() {
    return (
      <div className="anvilation">
		<Nav actions={this.props.actions} />
		<Main projects={this.props.projects} services={this.props.services}  actions={this.props.actions} />

		<Footer contactMethods={this.props.contactMethods} />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)