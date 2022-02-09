import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AnimeControls = ({ anime, type }) => {
    const {
        removeFromWatchlist,
        addToWatched,
        moveToWatchlist,
        removeFromWatched,
    } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button
                        className="ctrl-btn"
                        onClick={() => addToWatched(anime)}
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                    <button
                        className="ctrl-btn"
                        onClick={() => removeFromWatchlist(anime.mal_id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
            {type === "watched" && (
                <>
                    <button
                        className="ctrl-btn"
                        onClick={() => moveToWatchlist(anime)}
                    >
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeFromWatched(anime.mal_id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};
