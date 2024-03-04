function multiplyNumbers2(num1, num2, num3) {
    console.groupCollapsed('*2')
    for (let i = num1; i >= num2; i--) {
        if (i === num3) {
            console.log(`${i} * 2  = ${i * 2}`);
        }
    }
    console.groupEnd()
}

multiplyNumbers2(30, 25, 26)

function multiplyNumbers5(num1, num2, num3) {
    console.groupCollapsed('*5')

    for (let i = num1; i >= num2; i--) {
        if (i === num3) {
            console.log(`${i} * 5  = ${i * 5}`);
        }
    }
    console.groupEnd()
}

multiplyNumbers5(30, 25, 26)

function addNumbers5(num1, num2, num3) {
    console.groupCollapsed('+5')

    for (let i = num1; i >= num2; i--) {
        if (i === num3) {
            console.log(`${i} + 5  = ${i + 5}`);
        }
    }
    console.groupEnd()
}

addNumbers5(30, 25, 26)

function subtractNumbers2(num1, num2, num3) {
    console.groupCollapsed('-2')

    for (let i = num1; i >= num2; i--) {
        if (i === num3) {
            console.log(`${i} - 2  = ${i - 2}`);
        }
    }
    console.groupEnd()
}

subtractNumbers2(30, 25, 26)

function squareNumbers(num1, num2, num3) {
    console.groupCollapsed('* i')

    for (let i = num1; i >= num2; i--) {
        if (i === num3) {
            console.log(`${i} * ${i}  = ${i * i}`);
        }
    }
    console.groupEnd()
}

squareNumbers(30, 25, 26)

function powNumbers(num1, num2, num3) {
    console.groupCollapsed('pow')

    for (let i = num1; i >= num2; i--) {
        if (i === num3) {
            console.log(`${i}^3 = ${Math.pow(i, 3)}`);
        }
    }
    console.groupEnd()
}

powNumbers(30, 25, 26)


