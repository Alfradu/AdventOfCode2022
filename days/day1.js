const parseInput = (rawInput) => rawInput.split( /\n/).map(Number);

const part1 = (rawInput) => {
    var data = parseInput(rawInput);
    var sums = [];
    var newElf = true;
    for (var i = 0; i < data.length; i++) {
        if (data[i] == 0) { newElf = true } 
        else if (newElf) {
            sums.push(data[i]); 
            newElf = false;
        } else {
            sums[sums.length - 1] += data[i];
        }
    }
    sums.sort((a,b) => b-a);
    return sums[0];
}

const part2 = (rawInput) => {
    var data = parseInput(rawInput);
    var sums = [];
    var newElf = true;
    for (var i = 0; i < data.length; i++) {
        if (data[i] == 0) { newElf = true } 
        else if (newElf) {
            sums.push(data[i]); 
            newElf = false;
        } else {
            sums[sums.length - 1] += data[i];
        }
    }
    sums.sort((a,b) => b-a);
    return sums[0]+sums[1]+sums[2];
}

module.exports = {
    part1: {
        tests: [
            {
                input: `1000
              2000
              3000
              
              4000
              
              5000
              6000
              
              7000
              8000
              9000
              
              10000`,
                expected: 24000,
            },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            {
              input: `1000
              2000
              3000
              
              4000
              
              5000
              6000
              
              7000
              8000
              9000
              
              10000`,
              expected: 45000,
            },
        ],
        solution: part2,
    },
};