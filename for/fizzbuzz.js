function fizzBuzzGame(start, end, nth1, nth2, nth3, nth4, nth5) {
    let text1 = "Fizz";
    let text2 = "Buzz";
    let text3 = "Biff";
    let connectedString = '';

    for (let i = start; i <= end; i++) {
        switch (true) {
            // 3 5 7
            case (i % nth1 === 0 && i % nth2 === 0 && i % nth3 === 0):
                connectedString = `${text1}${text2}${text3}`;
                console.log(`${connectedString}`)
                break;

            // 3 5
            case (i % nth1 === 0 && i % nth2 === 0):
                connectedString = text1 + text2
                console.log(`${connectedString}`)
                break;

            // 3 7
            case (i % nth1 === 0 && i % nth3 === 0):
                connectedString = text1 + text3
                console.log(`${connectedString}`)
                break;

            // 5 7
            case (i % nth2 === 0 && i % nth3 === 0):
                connectedString = text2 + text3
                console.log(`${connectedString}`)
                break;

            // 3
            case (i % nth1 === 0):
                console.log(text1)
                break;

            // 5
            case (i % nth2 === 0):
                console.log(text2)
                break;

            // 7
            case (i % nth3 === 0):
                console.log(text3)
                break;

            // 9
            case (i % nth4 === 0):
                text1 = 'Fuzz';
                console.log(text1)
                break;

            // 11
            case (i % nth5 === 0):
                text2 = 'Bizz';
                console.log(text2)
                break;

            default:
                console.log(i)
                break;
        }
    }
}

fizzBuzzGame(1, 105, 3, 5, 7, 9, 11)