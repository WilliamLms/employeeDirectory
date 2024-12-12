// TODO: this file :)
const express = require("express");
const employees = require("./employees");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

app.get("/employees/:userid", async (req, res) => {
  const id = Number(req.params.userid);
  const employee = employees.find((element) => element.id === id);

  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: `Employee with id ${id} not found.` });
  }
});

app.get("/employee/random", async (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  res.status(200).json(randomEmployee);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
