const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

app.get("/employees", async (req, res, next) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
  }
});

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});
