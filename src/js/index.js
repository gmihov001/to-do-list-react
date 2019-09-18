//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

class ToDoMain extends React.Component {
	constructor() {
		super();
		this.state = {
			anInput: ""
		};
		this.updateState = this.updateState.bind(this);
	}

	updateState(e) {
		this.setState({ anInput: e.target.value });
	}

	render() {
		return (
			<div className="container m-auto text-center">
				<h1>Your To Do List</h1>
				<input
					type="text"
					value={this.state.anInput}
					onChange={this.updateState}
					placeholder="Enter activity here"
				/>
				<button
					type="button"
					className="btn"
					onClick={() => {
						let ul = document.querySelector("#toDoList");
						ul.innerHTML += `<li>${this.state.anInput}</li>`;
					}}>
					Enter Activity
				</button>
				<br />
				{this.state.anInput}
				<br />
				<ul id="toDoList">
					<li>Example</li>
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<ToDoMain />, document.querySelector("#app"));

/* class DeleteEntry extends React.Component {
    render() {
        return (

        );
    }
}
*/
