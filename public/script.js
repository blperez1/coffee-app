// client-side js, loaded by index.html
// run by the browser each time the page is loaded


// define variables that reference elements on our page
const coffeesList = document.querySelector("#coffees");
const searchSelection = document.querySelector("#search-selection")
const roastSelection = document.querySelector("#roast-selection");
const searchBtn = document.querySelector("#search")


// a helper function that creates renders html for each coffee
function renderCoffee({name, roast, price}) {
  return `
          <h3>${name}</h3>
          <p>${roast}</p>
          <p>${price}</p>
        `
}

function renderCoffees(coffees) {
  let html = "";
  for(let coffee of coffees) {
    html += renderCoffee(coffee);
  }
  return html;
}

function filterRoasts(coffees) {
  const roastSelected = roastSelection.value;
  let filterRoast =  (roastSelected === "all") ? coffees : coffees.filter(({roast}) => roast === roastSelected);
  return renderCoffees(filterRoast);
}

function filterByName(coffees) {
  let nameSelected = searchSelection.value
  return coffees.filter(({name}) => name.toLowerCase().startsWith(nameSelected.toLowerCase()))
}

function newCoffee(name, roast, price) {
  return {
      id: coffees.length + 1,
      name,
      roast,
      price
   }
}



fetch("/coffees")
  .then(response => response.json()) // parse the JSON from the server
  .then(coffees => {
    // remove the loading text
    coffeesList.firstElementChild.remove();
  
    // iterate through every coffee and add it to our page
    coffeesList.innerHTML = renderCoffees(coffees);

    searchBtn.addEventListener('click', () => {
      coffeesList.innerHTML = filterRoasts(coffees);
    });

    searchSelection.addEventListener('keyup', () => {
      coffeesList.innerHTML = renderCoffees(filterByName(coffees))
    })
   
  });
