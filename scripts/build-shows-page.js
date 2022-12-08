
let shows = {
    date : ["Mon Sept 06 2021","Tue Sept 11 2021","Tue Sept 11 2021","Fri Oct 15 2021","Sat Nov 06 2021","Fri Nov 26 2021","Wed Dec 15 2021"],
    venue : ["Ronald Lane","Pier 3 East","View Lounge","Hyatt Agency","Moscow Center","Press Club"],
    location : ["San Francisco, Ca","San Francisco, Ca","San Francisco, Ca","San Francisco, Ca","San Francisco, Ca","San Francisco, Ca"]
}

console.log(shows)


for (let i = 0; i < pets.length; i++) {
    const petItem = pets[i];
  
    let pet = createElementWithClass("div", "pet");
  
    let petName = document.createElement("h3");
    petName.classList.add("pet__name");
    petName.innerText = petItem.name;
  
    let petBio = document.createElement("p");
    petBio.classList.add("pet__bio");
    petBio.innerText = petItem.bio;
  
    pet.appendChild(petName);
    pet.appendChild(petBio);
    petsContainer.appendChild(pet);
  }