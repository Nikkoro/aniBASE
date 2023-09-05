import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Moment from "react-moment";

export const ResultCard = ({ anime }) => {
  const { addToWatchlist, watchlist, addToWatched, watched } =
    useContext(GlobalContext);

  let storedAnime = watchlist.find((o) => o.mal_id === anime.mal_id);
  let storedAnimeWatched = watched.find((o) => o.mal_id === anime.mal_id);

  const watchlistDisabled = storedAnime
    ? true
    : storedAnimeWatched
    ? true
    : false;
  const watchedDisabled = storedAnimeWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {anime.images.jpg.image_url ? (
          <a href={anime.url} target="_blank">
            <img
              src={anime.images.jpg.image_url}
              alt={`${anime.title} Poster`}
            />
          </a>
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="release-date">
            <Moment format="YYYY">{anime.aired.from}</Moment>
            <a href={anime.url} target="_blank">
              {anime.title.length <= 30 ? (
                <h3 className="title"> {anime.title.substring(0, 30)}</h3>
              ) : (
                <h3 className="title">
                  {anime.title.substring(0, 27) + "..."}
                </h3>
              )}
            </a>
          </h3>
          <h3 className="score">
            Score: <strong>{anime.score}</strong>
          </h3>
          {anime.synopsis && anime.synopsis.length > 150 ? (
            <h3 className="synopsis">
              {anime.synopsis.substring(0, 200) + "..."}
            </h3>
          ) : null}
        </div>
      </div>

      <div className="controls">
        <button
          className="btn"
          disabled={watchlistDisabled}
          onClick={() => addToWatchlist(anime)}
        >
          +Watchlist
        </button>
        <button
          className="btn"
          disabled={watchedDisabled}
          onClick={() => addToWatched(anime)}
        >
          +Completed
        </button>
      </div>
    </div>
  );
};
