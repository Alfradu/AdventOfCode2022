const parseInput = (input) => input.replaceAll(" ", "").split(/\n/);

//A X Rock      1
//B Y Paper     2
//C Z Scissors  3

const pMatches = [ 
    {r: "AX", s: "Y", p: 4},
    {r: "BY", s: "Y", p: 5},
    {r: "CZ", s: "Y", p: 6},
    {r: "AY", s: "Z", p: 8},
    {r: "AZ", s: "X", p: 3},
    {r: "BX", s: "X", p: 1},
    {r: "BZ", s: "Z", p: 9},
    {r: "CX", s: "Z", p: 7},
    {r: "CY", s: "X", p: 2}, 
]

const part1 = (input) => {
    const data = parseInput(input);
    var score = 0;
    for (let i = 0; i < data.length; i++) {
        score += pMatches.find(o => o.r == data[i]).p;
    }
    return score;
}

const part2 = (input) => {
    const data = parseInput(input);
    var score = 0;
    for (let i = 0; i < data.length; i++) {
        score += pMatches.find(m => m.s == data[i][1] && m.r[0] == data[i][0]).p;
    }
    return score;
}

module.exports = {
    part1: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
            {
                input: `A Y
                B X
                C Z`,
                expected: 15
            }
        ],
        solution: part1,
    },
    part2: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
            {
                input: `A Y
                B X
                C Z`,
                expected: 12
            }
        ],
        solution: part2,
    },
};