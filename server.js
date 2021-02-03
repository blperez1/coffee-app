// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const coffees = [
  { id: 1, name: 'Light City', roast: 'light', price: 4.99},
  { id: 2, name: 'Half City', roast: 'light', price: 4.99},
  { id: 3, name: 'Cinnamon', roast: 'light', price: 4.99},
  { id: 4, name: 'City', roast: 'medium', price: 4.99},
  { id: 5, name: 'American', roast: 'medium', price: 4.99},
  { id: 6, name: 'Breakfast', roast: 'medium', price: 4.99},
  { id: 7, name: 'High', roast: 'dark', price: 4.99},
  { id: 8, name: 'Continental', roast: 'dark', price: 4.99},
  { id: 9, name: 'New Orleans', roast: 'dark', price: 4.99},
  { id: 10, name: 'European', roast: 'dark', price: 4.99},
  { id: 11, name: 'Espresso', roast: 'dark', price: 4.99},
  { id: 12, name: 'Viennese', roast: 'dark', price: 4.99},
  { id: 13, name: 'Italian', roast: 'dark', price: 4.99},
  { id: 14, name: 'French', roast: 'dark', price: 4.99}
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/coffees", (req, res) => {
  // express helps us take JS objects and send them as JSON
  res.json(coffees);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
