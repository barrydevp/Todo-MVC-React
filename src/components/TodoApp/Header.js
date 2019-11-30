import React, { Component } from "react";
// import _ from "lodash";

export default class Header extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		// const { activeTodoCount } = this.props;

		// console.log(this.props.activeTodoCount);

		return (
			<header className="todo-header">
				<h1>todos</h1>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					onKeyDown={this.props.onEnter}
				/>
			</header>
		);
	}
}
