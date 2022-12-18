// -----------------------------WEB API--------------------------
const usersURL = "https://project-1-api.herokuapp.com/";
const myKey = "?api_key=c71dd9a6-0d71-4306-b904-6cea084f1404";
const myPage = ["register", "comments", "showdates"];
const api = `${usersURL}${myPage[2]}${myKey}`;
// console.log(api);
const shows = axios.get(api).then((response) => {
  data = response.data;
  // console.log(data);
  data.forEach((element) => {
    addShowCard(element);
    // console.log(element.date);
    // console.log(element);
  });
});
// console.log(CommentContent);
// ----------------------------------------------------------------

// let shows = [
//   {
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, Ca",
//   },
//   {
//     date: "Tue Sept 11 2021",
//     venue: "Pier 3 East",
//     location: "San Francisco, Ca",
//   },
//   {
//     date: "Fri Oct 15 2021",
//     venue: "View Lounge",
//     location: "San Francisco, Ca",
//   },
//   {
//     date: "Sat Nov 06 2021",
//     venue: "Hyatt Agency",
//     location: "San Francisco, Ca",
//   },
//   {
//     date: "Fri Nov 26 2021",
//     venue: "Moscow Center",
//     location: "San Francisco, Ca",
//   },
//   {
//     date: "Wed Dec 15 2021",
//     venue: "Press Club",
//     location: "San Francisco, Ca",
//   },
// ];

// -----------------SECTION SELECT-------------------------------------------
section = document.querySelector("section");
// ------------------function add element + classname------------------------
const createElementWithClass = (type, className) => {
  let element = document.createElement(type);
  element.classList.add(className);
  return element;
};
// Creating all the component
const sectionCards = createElementWithClass("div", "section-cards");
function addShowCard(element) {
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
  const sectionHeaderDateSubtitle = createElementWithClass(
    "p",
    "section-header-date__subtitle"
  );
  const sectionHeaderVenueSubtitle = createElementWithClass(
    "p",
    "section-header-venue__subtitle"
  );
  const sectionHeaderLocationSubtitle = createElementWithClass(
    "p",
    "section-header-location__subtitle"
  );

  sectionHeaderDateSubtitle.innerHTML = "DATE";
  sectionHeaderVenueSubtitle.innerHTML = "VENUE";
  sectionHeaderLocationSubtitle.innerHTML = "LOCATION";

  sectionDateSubtitle.classList.add("section__subtitle");
  sectionVenueSubtitle.classList.add("section__subtitle");
  sectionLocationSubtitle.classList.add("section__subtitle");
  sectionDateSubtitle.innerHTML = "DATE";
  sectionVenueSubtitle.innerHTML = "VENUE";
  sectionLocationSubtitle.innerHTML = "LOCATION";
  sectionButton.classList.add("button");
  sectionButton.type = "button";
  sectionButton.value = "BUY TICKETS";

  sectionHeader.appendChild(sectionHeaderDateSubtitle);
  sectionHeader.appendChild(sectionHeaderVenueSubtitle);
  sectionHeader.appendChild(sectionHeaderLocationSubtitle);

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
  // sectionCard.appendChild(sectionLine);

  sectionCards.appendChild(sectionCard);
  sectionCards.appendChild(sectionLine);

  sectionDown.appendChild(sectionHeader);
  sectionDown.appendChild(sectionCards);
  section.appendChild(sectionDown);

  let ts = new Date(element.date);
  sectionDate.innerHTML = ts.toDateString();
  sectionVenue.innerHTML = element.place;
  sectionLocation.innerHTML = element.location;
  console.log(element);
}
// ------------HEADER TABLET & DESKTOP--------------------------------------
const sectionDown = createElementWithClass("div", "section-down");
const sectionHeader = createElementWithClass("div", "section-header");

// ----------------Show CARDS-----------------------------------------------
const sectionSubtitle = document.getElementsByClassName("section__subtitle");

// sectionSubtitle.setAttribute("style", "color : $color--primary--silver");
// sectionSubtitle.style.color = "$color--primary--silver";
