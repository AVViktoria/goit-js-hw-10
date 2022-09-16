export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// fetchP()
//   .then(markUp)
//   .catch(error => {
//     console.log(error);
//   }).finally(() => form.reset());

// function fetchP(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => {
//     return response.json();
//   });
// }

// function markUp(r){
//    refs.infoContainer.innerHTML = r;}




// export default { fetchCountries };
