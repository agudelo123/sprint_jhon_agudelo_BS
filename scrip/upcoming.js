import { data } from './funciones.js';

function filterComingEvents(events) {
  const currentDateObj = new Date(data.currentDate);
  return events.filter(event => new Date(event.date) > currentDateObj);
}
function createEventCard(event, tarjetaId) {
  const cardDiv = document.createElement("div");
  cardDiv.id = tarjetaId || `event-card-${event._id}`;
  cardDiv.classList.add("card"); 
  cardDiv.innerHTML = `
    <div class="tarjetas">
      <img src="${event.image}" class="card-img-top imagenes2" alt="...">
      <div class="card-body">
        <h5 class="card-title titulo">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p class="card-text">category: ${event.category}</p>
        <p class="card-text">place: ${event.place}</p>
        <p class="text-white bg-dark p-2">fecha: ${event.date}</p>
        <div class="d-flex justify-content-between align-items-end mt-auto">
          <p class="card-text">price: ${event.price}</p>
          <a href="Details.html?id=${event._id}" class="btn btn-primary m-2">Go somewhere</a>        </div>
      </div>
    </div>
  `;
  return cardDiv;
}

function createCheckBoxes(events) {
  const categories = [...new Set(events.map(event => event.category))];
  const checkboxContainer = document.getElementById("checkboxContainer");

  categories.forEach(category => {
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("form-check", "m-2");

    const checkboxInput = document.createElement("input");
    checkboxInput.classList.add("form-check-input");
    checkboxInput.type = "checkbox";
    checkboxInput.value = category;
    checkboxInput.id = `checkbox-${category.replace(/\s+/g, "-").toLowerCase()}`;
    checkboxInput.addEventListener("change", handleCheckboxChange);

    const checkboxLabel = document.createElement("label");
    checkboxLabel.classList.add("form-check-label");
    checkboxLabel.setAttribute("for", `checkbox-${category.replace(/\s+/g, "-").toLowerCase()}`);
    checkboxLabel.textContent = category;

    checkboxDiv.appendChild(checkboxInput);
    checkboxDiv.appendChild(checkboxLabel);

    checkboxContainer.appendChild(checkboxDiv);
  });
}

function updateContent(events) {
  const eventsContainer = document.getElementById("eventsContainer");
  eventsContainer.innerHTML = ''; // Vaciamos el contenedor antes de añadir el contenido filtrado

  // Verificamos si hay eventos para mostrar y procedemos en consecuencia
  if (events.length === 0) {
    const noEventsMessage = document.createElement("div");
    noEventsMessage.classList.add("no-events-message");
    noEventsMessage.textContent = "No upcoming events found that match the criteria.";
    eventsContainer.appendChild(noEventsMessage);
  } else {
    events.forEach(event => {
      const eventCard = createEventCard(event);
      eventsContainer.appendChild(eventCard);
    });
  }

  // Una vez el contenido ha sido actualizado, llamamos a createCarouselContainers
  createCarouselContainers(events, 4);
}

function createCarouselContainers(events, itemsPerContainer) {
  const carouselInner = document.getElementById("carouselInner");
  const existingCards = document.querySelectorAll("#eventsContainer > .card");
  // Limpieza del carrusel para evitar duplicados
  carouselInner.innerHTML = '';
  for (let i = 0; i < existingCards.length; i += itemsPerContainer) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) {
      carouselItem.classList.add("active");
    }
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("d-flex", "justify-content-around");

    // Mover tarjetas existentes al carrusel en grupos de "itemsPerContainer"
    for (let j = i; j < i + itemsPerContainer; j++) {
      if (existingCards[j]) {
        containerDiv.appendChild(existingCards[j]);
      }
    }
    carouselItem.appendChild(containerDiv);
    carouselInner.appendChild(carouselItem);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  createCheckBoxes(filterComingEvents(data.events)); // Crea checkboxes para cada categoría única en eventos futuros
  applyFilters(); // Aplica los filtros para mostrar inicialmente solo los eventos futuros
  // Configurar los listeners de evento en los campos de búsqueda y checkboxes
  document.querySelector('input[type="search"]').addEventListener('input', handleSearchEvent);
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckboxChange);
  });
});

function handleSearchEvent() {
  const comingEvents = filterComingEvents(data.events); // Filtra eventos futuros para la búsqueda
  applyFilters(comingEvents);
}
function applyFilters() {
  // Primero filtrar eventos futuros
  let filteredEvents = filterComingEvents(data.events);
  // Obtener valores de la interfaz de usuario para la búsqueda y los checkboxes
  const searchText = document.querySelector('input[type="search"]').value.toLowerCase();
  const checkedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);
  // Filtrar por categorías si hay checkboxes seleccionados
  if (checkedCategories.length > 0) {
    filteredEvents = filteredEvents.filter(event => checkedCategories.includes(event.category));
  }
  // Filtrar por el texto de búsqueda si hay texto ingresado
  if (searchText) {
    filteredEvents = filteredEvents.filter(event =>
      event.name.toLowerCase().includes(searchText) ||
      event.description.toLowerCase().includes(searchText)
    );
  }
  // Actualizar el contenido con los eventos filtrados
  updateContent(filteredEvents);
}

function handleCheckboxChange() {
  const comingEvents = filterComingEvents(data.events); // Filtra eventos futuros
  applyFilters(comingEvents);
}
