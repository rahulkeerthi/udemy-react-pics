import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class App extends Component {
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar />
			</div>
		);
	}
}
