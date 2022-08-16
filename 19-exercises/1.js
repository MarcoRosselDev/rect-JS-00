// create a person object that contains three keys; name, age, and country.
// use yourself as an example to set the values for name, age, and country

// crate a function, logData(), that uses the person object to create a string in the following format;
// "per is 35 years old and lives in norway"

// call the logData() function to verify that it works

const person = {
  name: 'marco',
  age : 29,
  country : 'chile'
}

function logData() { 
  console.log(`${person.name} is ${person.age} yerars old and lives in ${person.country}`);
};

logData();