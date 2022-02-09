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
                {anime.image_url ? (
                    <img src={anime.image_url} alt={`${anime.title} Poster`} />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="release-date">
                        <Moment format="YYYY">{anime.start_date}</Moment>
                        <h3 className="title">{anime.title}</h3>
                    </h3>
                    <h3 className="score">
                        Score: <strong>{anime.score}</strong>
                    </h3>
                    <h3 className="synopsis">{anime.synopsis}</h3>
                </div>

                <div className="controls">
                    <button
                        className="btn"
                        disabled={watchlistDisabled}
                        onClick={() => addToWatchlist(anime)}
                    >
                        Add to Watchlist
                    </button>
                    <button
                        className="btn"
                        disabled={watchedDisabled}
                        onClick={() => addToWatched(anime)}
                    >
                        Mark as Completed
                    </button>
                </div>
            </div>
        </div>
    );
};
