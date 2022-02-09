import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
// initial state

const initialState = {
    watchlist: localStorage.getItem("watchlist")
        ? JSON.parse(localStorage.getItem("watchlist"))
        : [],
    watched: localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : [],
};

// creating context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //localstorage
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);
    //action
    const addToWatchlist = (anime) => {
        dispatch({ type: "ADD_TO_WATCHLIST", payload: anime });
    };

    const removeFromWatchlist = (mal_id) => {
        dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: mal_id });
    };

    const addToWatched = (anime) => {
        dispatch({ type: "ADD_TO_WATCHED", payload: anime });
    };

    const moveToWatchlist = (anime) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: anime });
    };

    const removeFromWatched = (mal_id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: mal_id });
    };

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addToWatchlist: addToWatchlist,
                removeFromWatchlist: removeFromWatchlist,
                addToWatched: addToWatched,
                moveToWatchlist: moveToWatchlist,
                removeFromWatched: removeFromWatched,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
