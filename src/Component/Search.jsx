import React, { Component } from "react";

export default class Search extends Component {
    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        placeholder="Search"
                        id="search"
                        type="text"
                        className="validate"
                    />
                </div>
            </div>
        );
    }
}
