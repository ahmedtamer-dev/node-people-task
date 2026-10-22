const yargs = require("yargs");
const people = require("./people");

yargs.command({
  command: "add",
  describe: "Add a person",

  builder: {
    id: {
      describe: "Person ID",
      demandOption: true,
      type: "number"
    },
    fname: {
      describe: "First name",
      demandOption: true,
      type: "string"
    },
    lname: {
      describe: "Last name",
      demandOption: true,
      type: "string"
    },
    age: {
      describe: "Age",
      demandOption: true,
      type: "number"
    },
    city: {
      describe: "City",
      demandOption: true,
      type: "string"
    }
  },

  handler: (x) => {
    people.addPerson(x.id, x.fname, x.lname, x.age, x.city);
  }
});


yargs.command({
  command: "list",
  describe: "Display all people",

  handler: () => {
    people.listPeople();
  }
});

yargs.command({
  command: "read",
  describe: "Display one person",

  builder: {
    id: {
      describe: "Person ID",
      demandOption: true,
      type: "number"
    }
  },

  handler: (x) => {
    people.readPerson(x.id);
  }
});

yargs.command({
  command: "delete",
  describe: "Delete one person",

  builder: {
    id: {
      describe: "Person ID",
      demandOption: true,
      type: "number"
    }
  },

  handler: (x) => {
    people.deletePerson(x.id);
  }
});

yargs.command({
  command: "delete-all",
  describe: "Delete all people",

  handler: () => {
    people.deleteAllPeople();
  }
});

yargs.command({
  command: "names",
  describe: "Display full names and cities",

  handler: () => {
    people.listNamesAndCities();
  }
});

yargs.demandCommand(1).parse();