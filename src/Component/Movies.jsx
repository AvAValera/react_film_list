import React from 'react'
import Movie from './Movie'
import PageNotFound from '../Component/PageNotFound'

export default function Movies(props) {
    const{movies = []} = props
    return (
        <div className='Movies'>
            {movies.length ? (movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)) : (<PageNotFound />)}
        </div>
    )
}

