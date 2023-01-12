import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { ResultCard } from "./ResultCard";
export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = async (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    await fetch(`https://api.jikan.moe/v4/anime?q=${e.target.value}&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.data);
        //console.log(data.data);
      });
  };

  return (
    <div className="add-page">
      <div className="wave"></div>
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <DebounceInput
              type="text"
              placeholder="Search for an anime"
              value={query}
              debounceTimeout={500}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((anime) => (
                <li key={anime.mal_id}>
                  <ResultCard anime={anime} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
