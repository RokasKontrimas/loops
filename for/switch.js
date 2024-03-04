function mathCalculator(from, to, each, number, operator) {
    let mathematicalSign = '';
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

    }
    for (let i = from; i <= to; i++) {
        if ((i - from + 1) % each === 0) {
            // console.log(i)
            let expression = `${i} ${mathematicalSign} ${number}`;
            let answer = eval(expression);
            console.log(`${expression} = ${answer}`);
        }
    }
}

mathCalculator(1, 123, 3, 2, 'multiply')