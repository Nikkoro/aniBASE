import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { AnimeCard } from "./AnimeCard";

export const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className="anime-page">
            <div className="wave"></div>
            <div className="container">
                <div className="header">
                    <h1 className="heading">Completed</h1>

                    <span className="count-pill">
                        {watched.length}{" "}
                        {watched.length === 1 ? "Anime" : "Animes"}
                    </span>
                </div>

                {watched.length > 0 ? (
                    <div className="anime-grid">
                        {watched.map((anime) => (
                            <AnimeCard
                                anime={anime}
                                key={anime.mal_id}
                                type="watched"
                            />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-animes">
                        You don't have any animes in your watched list! Press
                        "+ADD" to search for some.
                    </h2>
                )}
            </div>
        </div>
    );
};
