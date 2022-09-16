import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import {
  onCountryCardTemplate,
  onCountryListTemplate,
} from './js/markupTemplate.js';
import { refs } from './js/get-refs.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;
refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();

  const countryName = refs.searchForm.value;
  if (countryName === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }

  fetchCountries(countryName)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return;
      }
      if ((countries.length <= 10) & (countries.length > 1)) {
        const listMarkup = countries.map(country =>
          onCountryListTemplate(country)
        );

        refs.countryList.innerHTML = listMarkup.join('');
        refs.countryInfo.innerHTML = '';
        return;
      }
      if (countries.length === 1) {
        const cardMarkup = countries.map(country =>
          onCountryCardTemplate(country)
        );

        refs.countryInfo.innerHTML = cardMarkup.join('');
        refs.countryList.innerHTML = '';
        return;
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
      return error;
    });
}
