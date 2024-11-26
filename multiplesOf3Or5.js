function sumOfMultiples(limit){
    let threeCount = 3;
    let fiveCount = 5;
    let total = 0;
    while (threeCount < limit){
        total = total + threeCount;
        if (fiveCount < limit){
            total = total + fiveCount;
        }
        threeCount = threeCount + 3;
        fiveCount = fiveCount + 5;
    }

    console.log("Sum: " + total);
    return total;
}
module.exports = sumOfMultiples;

sumOfMultiples(1000);