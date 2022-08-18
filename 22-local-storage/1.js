let myLeads = `["www.awesomelead.com"]`;
console.log(typeof(myLeads));
// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads);
console.log(typeof(myLeads));
// 2. Push a new value to the array
myLeads.push('www.example.com');
console.log(myLeads);
// 3. Turn the array into a string again

// 4. Console.log the string using typeof to varify that it's a string