import axios from "axios";

const root = "https://swapi.dev/api/people/";

export const bringCharacters = async () => {
    return await (
        axios.get(`${root}`)
    );
}