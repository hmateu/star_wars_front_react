import React, { useEffect, useState } from "react";
import "./Planets.css";
import { bringPlanets } from "../../services/apiCalls/planets";
import { Loading } from "../../Common/Loading/Loading";
export const Planets = () => {
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        if (planets.length === 0) {
            bringPlanets()
                .then(
                    data => {
                        setPlanets(data.data.results)
                    }
                )
                .catch(error => console.log(error));
        }
    }, [planets]);
    return (
        <>
            <div className="planetsStyle">
            <div className="titlePlanets">Planets</div>
                {
                    planets.length > 0
                        ? (<div>
                            {
                                planets.map(planet => {
                                    return (
                                        <div key={planet.name} className="planetsList">
                                            {planet.name}
                                        </div>
                                    )
                                })
                            }
                        </div>)
                        : (<Loading />)
                }
            </div>
        </>
    );
}