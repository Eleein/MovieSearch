import React from "react";
import styles from "./MoviesMenu.module.scss";

export function MoviesMenu({movies}){

    return(
        <div>
            <span>Sharing a few of our favorite movies</span>
            <div>
                <ul>
                    {movies.map(({title, poster}) => {
                        return (
                            <li>
                                {title} <img src={poster} alt={title} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}