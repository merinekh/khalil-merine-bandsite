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
// console.log(shows.length)

for (let i = 0; i < shows.length; i++) {
  const showsItem = shows[i];

  let showsDate = createElementWithClass("div", "pet");
  console.log(showsItem);
}
//     let petName = document.createElement("h3");
//     petName.classList.add("pet__name");
//     petName.innerText = petItem.name;

//     let petBio = document.createElement("p");
//     petBio.classList.add("pet__bio");
//     petBio.innerText = petItem.bio;

//     pet.appendChild(petName);
//     pet.appendChild(petBio);
//     petsContainer.appendChild(pet);
