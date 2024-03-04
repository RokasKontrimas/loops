function mathCalculator(from, to, each, number, operator) {
    let mathematicalSign = '';
    let operateLoop = true;
    switch (true) {
        case operator === 'subtract':
            mathematicalSign = '-';
            break;

        case operator === 'add':
            mathematicalSign = '+';
            break;

        case operator === 'multiply':
            mathematicalSign = '*';
            break;

        case operator === 'divide':
            mathematicalSign = '/';
            break;
        default:
            operateLoop = false;
            console.log('Invalid mathematical operator')
            break;

    }
    if (operateLoop) {
        if (each < 1) {
            console.log('Number cannot be 0!');
        } else {

            for (let i = from; i <= to; i++) {
                if ((i - from + 1) % each === 0) {
                    let expression = `${i} ${mathematicalSign} ${number}`;
                    let answer = eval(expression);
                    console.log(`${expression} = ${answer}`);
                }
            }
        }
    }
}

mathCalculator(1, 123, 1, 2, 'multiply')