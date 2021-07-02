import React, { Component } from 'react'
import '../index.css'
import Movies from '../Component/Movies'
import Search from '../Component/Search'
import Preloader from '../Component/Preloader'
export default class Main extends Component {
    state = {
        movies: [],
        loading: true
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ee6fcf3e&s=matrix`)
        .then(res => res.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }
    onSearch = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ee6fcf3e&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(res => res.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }
    
    render() {
        return (
            <div className='Main' >
                <Search onSearch={this.onSearch}/>
                {this.state.loading ? <Preloader /> : (<Movies  movies={this.state.movies}/>) }
            </div>
        )
    }
}
