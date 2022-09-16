export function onCountryCardTemplate({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  return `
    <div class="card__container">
      <div class="card__wrapper">
        <img class="card__flags" src="${flags.svg}" alt="${
    name.official
  }" width="50" />
        <h2 class="card__name">${name.official}</h2>
      </div>
      <ul>
        <li><p class="card__capital"><b class="card__weight">Capital:</b> ${capital}</p></li>
        <li><p class="card__population"><b class="card__weight">Population:</b> ${population}</p></li>
        <li><p class="card__languages"><b class="card__weight">Languages:</b> ${Object.values(
          languages
        )}</p></li>
      </ul>
      
      
      
    </div>
  `;
}

export function onCountryListTemplate({ flags, name }) {
  return `
  <li class="card__wrapper">
    <img class="card__flags" src="${flags.svg}" alt="${name.official}" width="25" />
    <h2 class="card-list__name">${name.official}</h2>
  </li>
  `;
}
