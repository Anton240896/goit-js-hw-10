import axios from "axios";
import { Notify } from "notiflix";



const API_KEY = 'live_afqLVEwYbIw2J9sEFake7EWe481wyVS2QNq5FwWJnRmAeQ4OmU0tlcq9CLwTenlh';
axios.defaults.headers.common["x-api-key"] = API_KEY;      //      http request

const options = {
    headers: {
        method: "GET",
        'x-api-key' : API_KEY,
    }
}

export function fetchBreeds() {
    const BASE_URL = "https://api.thecatapi.com/v1/breeds";
    return axios.get(BASE_URL, options)
        .then(response => {        //   collection of breeds
            return response.data;
        })
        .catch(error => {
            Notify.failure("❌ Oops! Something went wrong! Try reloading the page!");
            throw error;
        })
    

}

export function fetchCatByBreed(breedId) {
    const SEARCH_URL =  `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    const SEARCH_OPTIONS = {
        headers: {    //      information about the cat
            method: "GET",
            'x-api-key' : API_KEY,
        }
    }; 

    
    return axios.get(SEARCH_URL,SEARCH_OPTIONS)
    .then(response => {
        if(response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    })                                              // display of cats
    .catch(error => {
        Notify.failure("❌ Oops! Something went wrong! Try reloading the page!");
        throw error;
    })


}
