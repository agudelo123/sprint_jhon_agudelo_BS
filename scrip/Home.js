import { 
  data, 
  createCheckBoxes, 
  updateContent, 
  createCarouselContainers, 
  handleSearchEvent, 
  setCheckboxListeners 
} from './funciones.js';
document.addEventListener('DOMContentLoaded', () => {
  createCheckBoxes(data.events);
  updateContent(data.events); 
  createCarouselContainers(data.events, 4); 
  setCheckboxListeners(data.events); 
  const searchInput = document.querySelector('input[type="search"]');
  searchInput.addEventListener('keyup', (event) => handleSearchEvent(event, data.events));
});