const elem = {
    breed_select : document.querySelector('.breed-select'),
    cat_info : document.querySelector('.cat-info'),
    loader : document.querySelector('.loader'),
    error : document.querySelector('.error')
}

  export function errorOn() {               //      show error
    elem.error.classList.remove('hidden');
  }
  
  export function errorOff() {
    elem.error.classList.add('hidden');   //   hide error
  
  }