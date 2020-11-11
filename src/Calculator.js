import React from "react";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: 0,
			num1: "",
			num2: "",
		};
	}

	handleFirstNum = (e) => {
		this.setState({
			num1: parseInt(e.target.value, 10),
		});
	};

	handleSecondNum = (e) => {
		this.setState({
			num2: parseInt(e.target.value, 10),
		});
	};

	render() {
		return (
			<div>
				<h1>Result: {this.state.result}</h1>
				<input
					onChange={this.handleFirstNum}
					placeholder="First number"
					value={this.state.num1}
				/>
				<input
					onChange={this.handleSecondNum}
					placeholder="Second number"
					value={this.state.num2}
				/>
			</div>
		);
	}
}

export default Calculator;
