import React from "react";
import "./Header.css";
import { ChangeView } from "../ChangeView/ChangeView";
export const Header = () => {
    return (
        <div className="headerStyle">
            <div className="left">
                <div className="starWarsText">
                    STAR WARS
                </div>
            </div>
            <div className="right">
                <ChangeView
                    path={"/"}
                    name={"Home"}
                />
                <ChangeView
                    path={"/characters"}
                    name={"Personajes"}
                />
                <ChangeView
                    path={"/planets"}
                    name={"Planetas"}
                />
            </div>

        </div>
    );
}