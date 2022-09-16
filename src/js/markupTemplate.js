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
      <p class="card__capital"><span class="card__weight">Capital:</span> ${capital}</p>
      <p class="card__population"><span class="card__weight">Population:</span> ${population}</p>
      <p class="card__languages"><span class="card__weight">Languages:</span> ${Object.values(
        languages
      )}</p>
    </div>
  `;
}

export function onCountryListTemplate({ flags, name }) {
  return `
  <li class="card-list__item">
    <img class="card-list__flags" src="${flags.svg}" alt="${name.official}" width="25" />
    <h2 class="card-list__name">${name.official}</h2>
  </li>
  `;
}
