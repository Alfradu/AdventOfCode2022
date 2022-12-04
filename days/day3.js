const parseInput = (input) => input.replaceAll(" ", "").split(/\n/);

const part1 = (input) => {
    const data = parseInput(input);
    var rucksackShared = "";
    for (const rucksack of data) {
        var middle = Math.floor(rucksack.length / 2);
        var lc = rucksack.substr(0, middle);
        var rc = rucksack.substr(middle);
        for (const item of lc) {
            if (rc.indexOf(item) != -1) 
            {
                rucksackShared += item;
                break;
            }
        }
    }
    return calculateScore(rucksackShared);
}

const part2 = (input) => {
    const data = parseInput(input);
    var rucksackShared = "";
    for (var i = 0; i < data.length; i+=3) {
        for (const item of data[i]) {
            if (data[i+1].indexOf(item) != -1 && data[i+2].indexOf(item) != -1) 
            {
                rucksackShared += item;
                break;
            }
        }
    }
    return calculateScore(rucksackShared);
}

function calculateScore(sharedItems){
    var score = 0;
    for (var i = 0; i < sharedItems.length; i++) {
        if (sharedItems[i] === sharedItems[i].toLowerCase()){
            score += sharedItems.charCodeAt(i) - 96;
        } else {
            score += sharedItems.charCodeAt(i) - 64 + 26;
        }
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
                input: `vJrwpWtwJgWrhcsFMMfFFhFp
                jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
                PmmdzqPrVvPwwTWBwg
                wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
                ttgJtRGJQctTZtZT
                CrZsJsPPZsGzwwsLwLmpwMDw`,
                expected: 157
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
                input: `vJrwpWtwJgWrhcsFMMfFFhFp
                jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
                PmmdzqPrVvPwwTWBwg
                wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
                ttgJtRGJQctTZtZT
                CrZsJsPPZsGzwwsLwLmpwMDw`,
                expected: 70
            }
        ],
        solution: part2,
    },
};