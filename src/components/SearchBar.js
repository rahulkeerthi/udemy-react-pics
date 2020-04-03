import React, { Component } from "react";

export default class SearchBar extends React.Component {
	state = { term: "" };

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					Image Search
					<div className="field">
						<input
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
