function function_results(x, y) {return console.log(`F(${x}) = ${y}\n`);}

function fibonacci_sequence(number) {
    const fibonacci = (n0, n1 = 0, n2 = 1) => {
        if (n0 <= 0) {
            function_results(number, n1);
            return;
        }
        else {return fibonacci (n0 - 1, n2, n1 + n2);}
    }
    fibonacci(number);
    return;
}

module.exports.sequence = fibonacci_sequence; 