import React from "react";

export default class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="search">Image Search</label>
						<input
							id="search"
							type="text"
							value={this.state.term}
							placeholder="enter your query..."
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}
