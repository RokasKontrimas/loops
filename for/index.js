function multiplyNumbers2() {
    console.groupCollapsed('*2')
    for (let i = 1; i <= 100; i++) {
        console.log(i * 2);
    }
    console.groupEnd()
}

multiplyNumbers2()

function multiplyNumbers5() {
    console.groupCollapsed('*5')

    for (let i = 1; i <= 100; i++) {
        console.log(i * 5);
    }
    console.groupEnd()
}

multiplyNumbers5()

function addNumbers5() {
    console.groupCollapsed('+5')

    for (let i = 1; i <= 100; i++) {
        console.log(i + 5);
    }
    console.groupEnd()
}

addNumbers5()

function subtractNumbers2() {
    console.groupCollapsed('-2')

    for (let i = 1; i <= 100; i++) {
        console.log(i - 2);
    }
    console.groupEnd()
}

subtractNumbers2()

function squareNumbers() {
    console.groupCollapsed('* i')

    for (let i = 1; i <= 100; i++) {
        console.log(i * i);
    }
    console.groupEnd()
}

squareNumbers()

function powNumbers() {
    console.groupCollapsed('pow')

    for (let i = 1; i <= 100; i++) {
        console.log(Math.pow(i, 3));
    }
    console.groupEnd()
}

powNumbers()


