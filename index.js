for(let i = 1; i < 101; i++) {
    if((i%3 == 0) && (i%5 == 0)) { //check for multiple of 3 and 5
        console.log("FizzBuzz");
    } else if (i%3 == 0) {
        console.log("Fizz"); //check for multiple of 3
    } else if (i%5 == 0) {
        console.log("Buzz"); //check for multiple of 5
    } else {
        console.log(i); //not multiple of 3 and 5
    }

}