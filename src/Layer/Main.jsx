import React, { Component } from 'react'
import '../index.css'
import Movies from '../Component/Movies'
import Search from '../Component/Search'
import Preloader from '../Component/Preloader'

export default class Main extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ee6fcf3e&s=matrix')
        .then(res => res.json())
        .then(data => this.setState({movies: data.Search}))
    }
    render() {
        return (
            <div className='Main' >
                <Search />
                {this.state.movies.length ? (<Movies movies={this.state.movies} />) :
                    <Preloader />
                }
            </div>
        )
    }
}
