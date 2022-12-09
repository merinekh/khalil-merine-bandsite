let shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, Ca",
  },
  {
    date: "Tue Sept 11 2021",
    venue: "Pier 3 East",
    location: "San Francisco, Ca",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, Ca",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, Ca",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, Ca",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, Ca",
  },
];

// function add element + classname
const createElementWithClass = (type, className) => {
  let element = document.createElement(type);
  element.classList.add(className);
  return element;
};
// Creating all the component
const sectionCards = createElementWithClass("div", "section-cards");
const sectionCard = createElementWithClass("div", "section-card");

const sectionDates = createElementWithClass("div", "section-dates");
const sectionVenues = createElementWithClass("div", "section-venues");
const sectionLocations = createElementWithClass("div", "section-locations");

const sectionDateSubtitle = createElementWithClass(
  "p",
  "section-date__subtitle"
);
const sectionVenueSubtitle = createElementWithClass(
  "p",
  "section-venue__subtitle"
);
const sectionLocationSubtitle = createElementWithClass(
  "p",
  "section-location__subtitle"
);

const sectionDate = createElementWithClass("p", "section__date");
const sectionVenue = createElementWithClass("p", "section__venue");
const sectionLocation = createElementWithClass("p", "section__location");
const sectionButton = createElementWithClass("input", "section-button");
const sectionLine = createElementWithClass("hr", "section__line");

sectionDateSubtitle.innerHTML = "DATE";
sectionVenueSubtitle.innerHTML = "VENUE";
sectionLocationSubtitle.innerHTML = "LOCATION";

sectionButton.type = "button";
sectionButton.value = "BUY TICKETS";

section = document.querySelector("section");
let cards = [{}];

for (let i = 0; i < shows.length; i++) {
  sectionDate.innerHTML = shows[i].date;
  sectionVenue.innerHTML = shows[i].venue;
  sectionLocation.innerHTML = shows[i].location;

  sectionDates.appendChild(sectionDateSubtitle);
  sectionDates.appendChild(sectionDate);
  sectionVenues.appendChild(sectionVenueSubtitle);
  sectionVenues.appendChild(sectionVenue);
  sectionLocations.appendChild(sectionLocationSubtitle);
  sectionLocations.appendChild(sectionLocation);

  sectionCard.appendChild(sectionDates);
  sectionCard.appendChild(sectionVenues);
  sectionCard.appendChild(sectionLocations);
  sectionCard.appendChild(sectionButton);
  sectionCard.appendChild(sectionLine);

  sectionCards.appendChild(sectionCard);

  section.appendChild(sectionCards);
  console.log(sectionCards);
}

console.log(sectionCards);

// for (let i = 0; i < shows.length; i++) {
//   const showsItem = shows[i];
// }
//     let petName = document.createElement("h3");
//     petName.classList.add("pet__name");
//     petName.innerText = petItem.name;

//     let petBio = document.createElement("p");
//     petBio.classList.add("pet__bio");
//     petBio.innerText = petItem.bio;

//     pet.appendChild(petName);
//     pet.appendChild(petBio);
//     petsContainer.appendChild(pet);
