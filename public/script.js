// client-side js, loaded by index.html
// run by the browser each time the page is loaded


// define variables that reference elements on our page
const coffeesList = document.querySelector("#coffees");
const searchSelection = document.querySelector("#search-selection")
const dreamsForm = document.querySelector("form");

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



fetch("/coffees")
  .then(response => response.json()) // parse the JSON from the server
  .then(coffees => {
    // remove the loading text
    coffeesList.firstElementChild.remove();
  
    // iterate through every coffee and add it to our page
    coffeesList.innerHTML = renderCoffees(coffees);
   
  });
