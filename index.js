for(let i = 1; i < 101; i++) {
    if((i%3 == 0) && (i%5 == 0)) { //check for multiple of 3 and 5
        console.log("FizzBuzz");
    } else if (i%3 == 0) { //check for multiple of 3
        console.log("Fizz"); 
    } else if (i%5 == 0) { //check for multiple of 5
        console.log("Buzz"); 
    } else { //not multiple of 3 and 5
        console.log(i); 
    }

}