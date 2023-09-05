import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { AnimeCard } from "./AnimeCard";
export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="anime-page">
      <div className="wave"></div>
      <div className="container">
        <div className="header">
          <h1 className="heading">Watching</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Anime" : "Animes"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="anime-grid">
            {watchlist.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-animes">
            You don't have any animes in your current watchlist! Press "Search"
            to find some.
          </h2>
        )}
      </div>
    </div>
  );
};
