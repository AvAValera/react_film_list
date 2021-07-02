import React from 'react'
import Movie from './Movie'
export default function Movies(props) {
    return (
        <div className='Movies'>
            {props.movies.map((movie) => {
                return <Movie key={movie.imdbID} {...movie} />
            })}
        </div>
    )
}

