// client-side js, loaded by index.html
// run by the browser each time the page is loaded


// define variables that reference elements on our page
const coffeesList = document.querySelector("#coffees");
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
  coffeesList.innerHTML = html;
}

function appendNewDream(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
}


fetch("/coffees")
  .then(response => response.json()) // parse the JSON from the server
  .then(coffees => {
    // remove the loading text
    coffeesList.firstElementChild.remove();
  
    // iterate through every dream and add it to our page
    renderCoffees(coffees);
  
    // listen for the form to be submitted and add a new dream when it is
    // dreamsForm.addEventListener("submit", event => {
      // stop our form submission from refreshing the page
      // event.preventDefault();

      // get dream value and add it to the list
      // let newDream = dreamsForm.elements.dream.value;
      // dreams.push(newDream);
      // appendNewDream(newDream);

      // reset form
      // dreamsForm.reset();
      // dreamsForm.elements.dream.focus();
    // });
  });
