function fibonacci_sequence(number) {
    var n0 = 0;
    var n1 = 0;
    var n2 = 1;
    if (number <= 1) {
        if(number == 1) {return console.log(`F(${n2}) = ${n2}`);}
        else {return console.log(`F(${n1}) = ${n1}`);}
    }
    else {
        for (var i = 0; i < number; i++) {
            var v = n2;
            n2 = n1 + n2;
            n1 = v;
            n0++;
        }
        return console.log(`F(${n0}) = ${n1}`);
    }
}
module.exports.sequence = fibonacci_sequence;