let largeCountries = ['tuvalu', 'india', 'usa', 'indonesia', 'monaco'];

// you need to help me fixup the largeCountries array so that 
// china and pakistan are added back into their respective places

// use push() & pop() and their counterparts unshift() and shift()
// google how to use unshift() and shift()

largeCountries.pop();
largeCountries.push('pkistan');
largeCountries.shift();           //elimina el primero del array
largeCountries.unshift('china');  //agrega al principio del array
console.log(largeCountries);

// solution = [ 'china', 'india', 'usa', 'indonesia', 'pkistan' ];