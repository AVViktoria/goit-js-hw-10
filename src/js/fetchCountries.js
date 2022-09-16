//*  функцию fetchCountries(name)  делает HTTP-запрос 
//*  на ресурс name и возвращает промис с массивом 
//*  стран - результатом запроса. сделай именованный экспорт.
//*  https://restcountries.com/#api-endpoints-v2-full-name

import getRefs from './get-refs';
const refs = getRefs();
// const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

refs.searchForm.addEventListener('submit', fetchCountries);

function fetchCountries(name) {
  name.preventDefault();

  // const form = e.currentTarget;
  // const name = form.elements.query.value;
  
    return fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
      // console.log(response.json());
    });
  }
//     return fetch(`https://restcountries.com/v3.1/name/${e}?fullText=true`)
//   .then(response =>{return response.json();})
//   .then(r =>{
// console.log(r);
//   refs.infoContainer.innerHTML = r;})
//   .catch(error =>{console.log(error);})
//   .finally(() => form.reset());




