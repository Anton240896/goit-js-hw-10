import SlimSelect from "slim-select";
import axios from "axios";
import { Notify } from "notiflix";
import { fetchBreeds, fetchCatByBreed } from "./cat_api";



const elem = {
    breed_select : document.querySelector('.breed-select'),
    cat_info : document.querySelector('.cat-info')
}

fetchBreeds()
    .then( r => {
        const markup = r.map(({id,name }) => `<option value="${id}">${name}</option>`);
        select.insertAdjacentHTML('beforeend', markup);
        new SlimSelect({ select: select });
      });

      elem.breed_select.addEventListener('change', optionClick)





fetchCatByBreed();


