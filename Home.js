const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};

function createEventCard(event, tarjetaId) {
  const cardDiv = document.createElement("div");
  cardDiv.id = tarjetaId || `event-card-${event._id}`;
  cardDiv.classList.add("card"); // Solo añadimos la clase 'card', 'tarjetas' ya se incluye en el innerHTML
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
          <a href="Details.html" class="btn btn-primary m-2">Go somewhere</a>
        </div>
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
let carouselCreated = false;
let carouselInner;
;

function updateContent(events) {
  const eventsContainer = document.getElementById("eventsContainer");
  // Limpieza de contenedores
  eventsContainer.innerHTML = '';
  if (events.length === 0) {
    // Si no hay eventos que mostrar, presentamos un mensaje al usuario
    const noEventsMessage = document.createElement("div");
    noEventsMessage.classList.add("no-events-message");
    noEventsMessage.textContent = "No events found that match the criteria."; // Mensaje de no encontrado
    eventsContainer.appendChild(noEventsMessage);
  } else {
    // Creación de tarjetas para cada evento y agregado al contenedor de eventos
    events.forEach(event => {
      const eventCard = createEventCard(event);
      eventsContainer.appendChild(eventCard);
    });
  }
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
  createCheckBoxes(data.events);
  updateContent(data.events); // Crear tarjetas de eventos
  createCarouselContainers(data.events, 4); // Inicializar carrusel
  const searchInput = document.querySelector('input[type="search"]');
  searchInput.addEventListener('keyup', handleSearchEvent); // Listener en el campo de búsqueda en lugar del formulario
});
function handleSearchEvent() {
  const searchText = this.value.toLowerCase(); // 'this' hace referencia al input de búsqueda
  const filteredEvents = data.events.filter(evt =>
    evt.name.toLowerCase().includes(searchText) || 
    evt.description.toLowerCase().includes(searchText)
  );
  
  applyFilters(filteredEvents);
}
function applyFilters(filteredEvents) {
  // Filter again using selected categories
  const checkedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);
    
  const eventsToShow = checkedCategories.length > 0 ?
    filteredEvents.filter(event => checkedCategories.includes(event.category)) :
    filteredEvents;
  updateContent(eventsToShow);
  createCarouselContainers(eventsToShow, 4);
}
function handleCheckboxChange() {
  // Instead of directly calling updateContent and createCarouselContainers
  // We'll now call a function that applies both filters
  applyFilters(data.events);
}

