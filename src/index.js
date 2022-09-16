import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import { onCountryCardTemplate, onCountryListTemplate } from './js/markupTemplate.js';
import { refs } from './js/get-refs.js';
//import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';



const DEBOUNCE_DELAY = 300;
refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchCountries(searchQuery)
  .then(onCountryCardTemplate)
  .catch(error => console.log(error));

}