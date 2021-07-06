import React, {useState} from "react";

const Search = (props) => {
    const {onSearch} = props
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');    

    
    const enterSearch = (e) => {
        if(e.key === 'Enter'){
            onSearch(search, filter)
        }
    }

    const changeFilter = (e) => {
        setFilter(e.target.dataset.atribute,
            () => {onSearch(search, filter)})
    }

    
    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    placeholder="Search"
                    id="search"
                    type="text"
                    className="validate"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                    onKeyDown = {enterSearch}
                />
                <div className="Filter">
                    <label>
                        <input onChange={changeFilter} 
                        class="with-gap" 
                        name="filter" 
                        type="radio" 
                        data-atribute='all'
                        checked={filter === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input onChange={changeFilter} 
                        class="with-gap" 
                        name="filter" 
                        type="radio" 
                        data-atribute='movie'
                        checked={filter === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input onChange={changeFilter} 
                        class="with-gap" 
                        name="filter" 
                        type="radio" 
                        data-atribute='series'
                        checked={filter === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
                <button onClick={() => onSearch(search, filter)} 
                    class="btn-search btn waves-effect waves-light" 
                    type="submit" 
                    name="action">
                    Search
                </button>
            </div>
            
        </div>
    );
};
export default Search
