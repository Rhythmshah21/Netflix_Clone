import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Player from "./components/Player";
import Movies from "./pages/Movies";
import TVshows from "./pages/TVshows";
import UserListedMovies from "./pages/UserListedMovies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TVshows />} />
        <Route exact path="player" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
      </Routes>
    </BrowserRouter>
  );
}
