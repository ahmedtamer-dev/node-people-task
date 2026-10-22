const fs = require("fs");

const loadPeople = () => {
  try {
    const data = fs.readFileSync("people.json").toString();
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const savePeople = (people) => {
  const data = JSON.stringify(people, null, 2);
  fs.writeFileSync("people.json", data);
};

const addPerson = (id, fname, lname, age, city) => {
  const people = loadPeople();

  const duplicated = people.filter((person) => {
    return person.id === id;
  });

  if (duplicated.length === 0) {
    people.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city
    });

    savePeople(people);
    console.log("Person added successfully");
  } else {
    console.log("ERROR: ID already exists");
  }
};

const listPeople = () => {
  const people = loadPeople();

  if (people.length === 0) {
    console.log("No people found");
    return;
  }

  people.forEach((person) => {
    console.log(person);
  });
};


const readPerson = (id) => {
  const people = loadPeople();

  const person = people.find((obj) => {
    return obj.id === id;
  });

  if (person) {
    console.log(person);
  } else {
    console.log("Person not found");
  }
};

const deletePerson = (id) => {
  const people = loadPeople();

  const remainingPeople = people.filter((person) => {
    return person.id !== id;
  });

  if (remainingPeople.length === people.length) {
    console.log("Person not found");
    return;
  }

  savePeople(remainingPeople);
  console.log("Person deleted successfully");
};

const deleteAllPeople = () => {
  savePeople([]);
  console.log("All people deleted");
};

const listNamesAndCities = () => {
  const people = loadPeople();

  if (people.length === 0) {
    console.log("No people found");
    return;
  }

  people.forEach((person) => {
    const fullName = person.fname + " " + person.lname;
    console.log(fullName, "-", person.city);
  });
};

module.exports = {
  addPerson,
  listPeople,
  readPerson,
  deletePerson,
  deleteAllPeople,
  listNamesAndCities
};