import React from "react";
import logo from "./logo512.png"
export default function Movie(props) {
    const{
        Title: title,
        Year: year,
        Type: type,
        Poster: poster
    } = props;
    function posterImg(){
        if(poster === 'N/A'){
            return logo
        }
        else{
            return poster
        }
    }
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={posterImg()} alt='img' />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>
                <p>
                    {type} {year}
                </p>
            </div>
            
        </div>
    );
}