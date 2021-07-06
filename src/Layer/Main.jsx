import React, {useState, useEffect} from 'react'
import '../index.css'
import Movies from '../Component/Movies'
import Search from '../Component/Search'
import Preloader from '../Component/Preloader'
const Main = () => {
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ee6fcf3e&s=matrix`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.Search)
            setLoading(false)
        })
    },[])

    const onSearch = (str, type = 'all') => {
        setLoading(true)
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ee6fcf3e&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.Search)
            setLoading(false)
        })
    }
    
    
    return (
        <div className='Main' >
            <Search onSearch={onSearch}/>
            {loading ? <Preloader /> : (<Movies  movies={movies}/>) }
        </div>
    )
    
};
export default Main