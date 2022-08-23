const number = [4, 5, 3, 7, 1];

console.log(number.sort());

// last digit addition

const numbers1 = [2, 3];

 function lastDigitAddition (num) {
 numbers1[numbers1.length - 1] =
 numbers1[numbers1.length - 1] + num ;
 return  numbers1
 }

console.log(lastDigitAddition(1));


// if last digit more than 9

const numbers = [2, 9];

 function lastDigitAdd (num) {
 numbers[numbers.length - 1] =
 numbers[numbers.length - 1] + num ;
 
  if ((numbers[numbers.length - 1] + num) > 9){
    console.log([3, 0]);
    }else{
        console.log(numbers);
    }
 }

console.log(lastDigitAdd(1));
