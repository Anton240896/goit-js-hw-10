import SlimSelect from "slim-select";
import { Notify } from "notiflix";
import { fetchBreeds, breedCat } from "./cat_api";





const elem = {
    body : document.querySelector('body'),
    breed_select : document.querySelector('.breed-select'),
    cat_info : document.querySelector('.cat-info')
}

fetchBreeds();
breedCat();


