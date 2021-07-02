import React, { Component } from "react";

export default class Search extends Component {
    state = {
        search : '',
        filter : 'all'
    }
    enterSearch = (e) => {
        if(e.key === 'Enter'){
            this.props.onSearch(this.state.search, this.state.filter)
        }
    }

    changeFilter = (e) => {
        this.setState({filter: e.target.dataset.atribute},
            () => {this.props.onSearch(this.state.search, this.state.filter)})
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        placeholder="Search"
                        id="search"
                        type="text"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => {this.setState({search: e.target.value})}}
                        onKeyDown={this.enterSearch}
                    />
                    <div className="Filter">
                        <label>
                            <input onChange={this.changeFilter} 
                            className="with-gap" 
                            name="filter" 
                            type="radio" 
                            data-atribute='all'
                            checked={this.state.filter === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input onChange={this.changeFilter} 
                            className="with-gap" 
                            name="filter" 
                            type="radio" 
                            data-atribute='movie'
                            checked={this.state.filter === 'movie'}
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input onChange={this.changeFilter} 
                            className="with-gap" 
                            name="filter" 
                            type="radio" 
                            data-atribute='series'
                            checked={this.state.filter === 'series'}
                            />
                            <span>Series</span>
                        </label>
                    </div>
                    <button onClick={() => this.props.onSearch(this.state.search, this.state.filter)} 
                        className="btn-search btn waves-effect waves-light" 
                        type="submit" 
                        name="action">
                        Search
                    </button>
                </div>
                
            </div>
        );
    }
}
