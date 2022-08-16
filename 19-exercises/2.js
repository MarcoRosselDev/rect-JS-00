// lees than 6 years old -> free
// 6 to 17 years old -> child discount
// 18 to 26 years old  -> student discount
// 26 to 66 years old  -> full price
// over 66 years old  -> senior citizen discount

// create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

let a = 29;

function passenger(age){
  if (age <= 6) {
    console.log('free');
  } else if (age > 6 || age <= 17) {
    console.log('child discount');
  } else if (age > 17 || age <= 26) {
    console.log('student discount');
  } else if (age > 26 || age <= 66) {
    console.log('full price');
  } else {
    console.log('senior citizen discount');
  }
}

passenger(a);