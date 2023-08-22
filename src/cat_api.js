import axios from "axios";


const API_KEY = 'live_afqLVEwYbIw2J9sEFake7EWe481wyVS2QNq5FwWJnRmAeQ4OmU0tlcq9CLwTenlh';
axios.defaults.headers.common["x-api-key"] = API_KEY;

const options = {
    headers: {
        method: "GET",
        'x-api-key' : API_KEY,
    }
}

export default function fetchBreeds(evt) {
    const BASE_URL = "https://api.thecatapi.com/v1/breeds";
    return(BASE_URL, options.json())
    }

    export default function breedCat() {
        const INFO_CAT = 'https://api.thecatapi.com/v1/images/search';
        return (INFO_CAT, options.json())
    }


