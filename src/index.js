import SlimSelect from "slim-select";
import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat_api";

const API_KEY = 
'live_afqLVEwYbIw2J9sEFake7EWe481wyVS2QNq5FwWJnRmAeQ4OmU0tlcq9CLwTenlh';
axios.defaults.headers.common["x-api-key"] = API_KEY;      //      http request


const elem = {
    breed_select : document.querySelector('.breed-select'),
    cat_info : document.querySelector('.cat-info')
}

fetchBreeds()                  //     collection of breeds
    .then( images => {
        const markup = images.map(({id,name }) => `<option value="${id}">${name}</option>`);
        elem.breed_select.insertAdjacentHTML('beforeend', markup);
        new SlimSelect({ breed_select: breed_select });
      });


      elem.breed_select.addEventListener('change', optionClick)
function optionClick(evt) {                //    select click
    const select_option = evt.currentTarget.value;
    fetchCatByBreed(select_option)
    .then(displayCatCard);
    console.log(evt);
}

function displayCatCard(res) {
    console.log(res);
    const breed_info = res[0].breeds[0];
    const IMAGE = {
      url: res[0].url,
      alt: breed_info.name,
    }                                              // display of cats
    const markup = `
      <h1 class="header">${breed_info.name}</h1>
      <div class="card">
        <img src="${IMAGE.url}" alt="Cat breed ${IMAGE.alt}" class="image" width=500>
        <div class="description">
          <p class="text">${breed_info.description}</p>
          <p class="text"><b>Temperament:</b> ${breed_info.temperament}</p>
        </div>
      </div>
    `;
  elem.cat_info.innerHTML = markup;
  }