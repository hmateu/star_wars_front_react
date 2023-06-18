import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Characters } from "../Characters/Characters";
import { Planets } from "../Planets/Planets";
export const Body = () => {
    return(
        <Routes>
            <Route path="*" element={<Navigate to = "/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/planets" element={<Planets />} />
        </Routes>
    );
}