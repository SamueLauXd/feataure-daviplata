import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Login } from "./Pages/Logins";
import { Home } from "./Pages/Home";
import { Categories } from "./Pages/Categories";
import { PocketDetail } from "./Pages/PocketDetail";
import { Ranking } from "./Pages/Ranking";

export function App() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/ranking" element={<Ranking/>}/>
            <Route path="/pockets/:id/:name/:saldo/:quota" element={<PocketDetail/>}/>
        </Routes>
    )
}