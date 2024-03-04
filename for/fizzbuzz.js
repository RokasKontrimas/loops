function fizzBuzzGame(start, end, nth1, nth2) {
    let text1 = "Fizz";
    let text2 = "Buzz";

    for (let i = start; i <= end; i++) {
        if (i % nth1 === 0 && i % nth2 !== 0) {
            console.log(text1)
        } else if (i % nth2 === 0 && i % nth1 !== 0) {
            console.log(text2)
        } else if (i % nth1 === 0 && i % nth2 === 0) {
            let connectedString = text1 + text2
            console.log(`${connectedString}`)
        } else {
            console.log(i);
        }
    }
}

fizzBuzzGame(1, 100, 3, 5)