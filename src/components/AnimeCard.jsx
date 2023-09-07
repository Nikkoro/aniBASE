import React from "react";
import { AnimeControls } from "./AnimeControls";

export const AnimeCard = ({ anime, type }) => {
  return (
    <div className="anime-card">
      {anime.title.length ? (
        <h3 className="titles"> {anime.title}</h3>
      ) : (
        <h3 className="titles">No title</h3>
      )}
      <div className="overlay"></div>
      <a href={anime.url} target="_blank">
        <img
          src={anime.images.jpg.large_image_url}
          alt={`${anime.title} Poster`}
        />
      </a>
      <AnimeControls type={type} anime={anime} />
    </div>
  );
};
