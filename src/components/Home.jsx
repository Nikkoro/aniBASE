import React, { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import { AnimeCard } from "./AnimeCard";
import { ResultCard } from "./ResultCard";
import { AnimeControls } from "./AnimeControls";

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [session, setSession] = useState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/top/anime?&filter=airing`)
      .then((res) => res.json())
      .then((data) => {
        setTrending(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div className="anime-page">
      <div className="wave"></div>
      <div className="container">
        {!session ? (
          <>
            <div className="header">
              <h2 className="heading">Welcome</h2>
            </div>
            <h2 className="no-animes">Sign in/up to get started!</h2>
          </>
        ) : (
          <>
            <div className="header">
              <h2 className="heading">Hello, {session.user.email}</h2>
            </div>
            <h2 className="no-animes">Top animes currently airing</h2>
            {trending.length > 0 && (
              <div className="anime-grid" style={{ color: "white" }}>
                {/* {trending.map((anime, idx) => (
                  <div key={idx}>
                    <img src={anime.entry[0].images.jpg.image_url} />
                  </div>
                ))} */}
                {trending.map((anime) => (
                  <AnimeCard anime={anime} key={anime.mal_id} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
