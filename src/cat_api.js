import axios from "axios";


const API_KEY = 'live_afqLVEwYbIw2J9sEFake7EWe481wyVS2QNq5FwWJnRmAeQ4OmU0tlcq9CLwTenlh';
axios.defaults.headers.common["x-api-key"] = API_KEY;

const options = {
    headers: {
        method: "GET",
        'x-api-key' : API_KEY,
    }
}

export function fetchBreeds() {
    const BASE_URL = "https://api.thecatapi.com/v1/breeds";
    return axios.get(BASE_URL, options)
        .then(response => {
            console.log("Response from fetchBreeds:", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error in fetchBreeds:", error);
            throw error;
        });
}

export function fetchCatByBreed(breedId) {
    const INFO_CAT = 'https://api.thecatapi.com/v1/images/search';
    return axios.get(INFO_CAT, options)
        .then(response => {
            console.log("Response from breedCat:", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error in breedCat:", error);
            throw error;
        });
}