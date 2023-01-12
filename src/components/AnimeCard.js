import React from "react";
import { AnimeControls } from "./AnimeControls";

export const AnimeCard = ({ anime, type }) => {
  return (
    <div className="anime-card">
      {anime.title.length <= 20 ? (
        <h3 className="titles"> {anime.title.substring(0, 20)}</h3>
      ) : (
        <h3 className="titles">{anime.title.substring(0, 17) + "..."}</h3>
      )}
      <div className="overlay"></div>
      <a href={anime.url} target="_blank">
        <img src={anime.images.jpg.image_url} alt={`${anime.title} Poster`} />
      </a>
      <AnimeControls type={type} anime={anime} />
    </div>
  );
};
