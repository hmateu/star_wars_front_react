import axios from "axios";

const root = "https://swapi.dev/api/planets/";

export const bringPlanets = async () => {
    return await (
        axios.get(`${root}`)
    );
}