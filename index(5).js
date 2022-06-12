

function range () {
  //generating a random number between 1 and 2
  const random = Math.floor(Math.random() * 2) + 1;

  //prompting user for input
  let number =(prompt('Guess a number from 1 to 2: '));

  // input guess until correct
  while(number !== random){
    number = (prompt('Guess a number from 1 to 2: '))
  }

  // check if guess is correct
  if(number == random) {console.log('You have received a point')};  
}
range();

console.log(range);