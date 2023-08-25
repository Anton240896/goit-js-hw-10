
const elem = {
    breed_select : document.querySelector('.breed-select'),
    cat_info : document.querySelector('.cat-info'),
    loader : document.querySelector('.loader'),
    error : document.querySelector('.error')
}

export function loadingOn() {
    elem.loader.classList.remove('hidden');     //      show loading
  };
  
  export function loadingOff() {
    elem.loader.classList.add('hidden');      //      disable loading
  };