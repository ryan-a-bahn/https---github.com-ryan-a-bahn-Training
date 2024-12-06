function sumOfMultiples(limit){
    let threeCount = 3;
    let fiveCount = 5;
    let total = 0;
    while (threeCount < limit){
        console.log("threeCount: " + threeCount);
        console.log("fiveCount: " + fiveCount);
        total = total + threeCount;
        threeCount = threeCount + 3;
        if (fiveCount < limit){
            total = total + fiveCount;
            fiveCount = fiveCount + 5;
        }
    }

    //ISSUE IS THAT IF IT'S A MULTIPLE OF BOTH IT ADDS IT TWICE

    console.log("Sum: " + total);
    return total;
}
module.exports = sumOfMultiples;

sumOfMultiples(1000);