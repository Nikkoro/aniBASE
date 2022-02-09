import React from "react";
import { AnimeControls } from "./AnimeControls";

export const AnimeCard = ({ anime, type }) => {
    return (
        <div className="anime-card">
            {anime.title.length <= 20 ? (
                <h3 className="titles"> {anime.title.substring(0, 20)}</h3>
            ) : (
                <h3 className="titles">
                    {anime.title.substring(0, 17) + "..."}
                </h3>
            )}
            <div className="overlay"></div>
            <img src={anime.image_url} alt={`${anime.title} Poster`} />

            <AnimeControls type={type} anime={anime} />
        </div>
    );
};
