import axios from "axios";
import SlimSelect from "slim-select";





const API_KEY = 'live_afqLVEwYbIw2J9sEFake7EWe481wyVS2QNq5FwWJnRmAeQ4OmU0tlcq9CLwTenlh';
axios.defaults.headers.common["x-api-key"] = API_KEY;


function fetchBreeds() {
    const cat_api = 'https://api.thecatapi.com/v1/breeds';
    
}