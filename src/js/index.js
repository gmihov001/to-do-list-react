//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { ListElement } from "./component/ListElement.js";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

class ToDoMain extends React.Component {
	constructor() {
		super();
		this.state = {
			anInput: "",
			theList: []
		};
		this.updateState = this.updateState.bind(this);
	}

	updateState(e) {
		this.setState({ anInput: e.target.value });
	}

	deleteEntry = ind => {
		let temp = this.state.theList;
		temp.splice(ind, 1);
		this.setState({ theList: temp });
	};

	componentDidMount = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Gmihov")
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				} else {
					console.log("Something happens");
				}
			})
			.then(data => {
				this.setState({ theList: data });
			});
	};

	render() {
		let aList = this.state.theList.map((todo, index) => {
			return (
				<ListElement
					key={index}
					name={todo.label}
					action={() => this.deleteEntry(index)}
				/>
			);
		});
		return (
			<div className="container">
				<h1>Your To Do List</h1>
				<input
					className="inpt"
					type="text"
					value={this.state.anInput}
					onChange={this.updateState}
					placeholder="Enter activity here"
				/>
				<button
					type="button"
					className="bttn"
					onClick={() =>
						this.setState({
							theList: this.state.theList.concat([
								this.state.anInput
							])
						})
					}>
					Enter Activity
				</button>
				<ul id="toDoList">{aList}</ul>
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
