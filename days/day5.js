const parseInput = (input) => input.split('\n');

const part1 = (input) => {
    const data = parseInput(input);
    var splitIndex = data.indexOf('');
    var stack = generateStack(data, splitIndex);
    for (let i = splitIndex + 1; i < data.length; i++) {
        var rowData = data[i].split(' ');
        for (let j = parseInt(rowData[1]); j > 0; j--) {
            stack = moveItem(stack, parseInt(rowData[3]) - 1, parseInt(rowData[5]) - 1, 1);
        }
    }
    return getTopItems(stack);
}

const part2 = (input) => {
    const data = parseInput(input);
    var splitIndex = data.indexOf('');
    var stack = generateStack(data, splitIndex);
    for (let i = splitIndex + 1; i < data.length; i++) {
        var rowData = data[i].split(' ');
        stack = moveItem(stack, parseInt(rowData[3]) - 1, parseInt(rowData[5]) - 1, parseInt(rowData[1]));
    }
    return getTopItems(stack);
}

function generateStack(data, index) {
    var stackString = data[index - 1].trim();
    var stack = Array.apply(null, Array(parseInt(stackString[stackString.length - 1]))).map(() => []);
    for (let i = index - 2; i >= 0; i--) {
        var currLine = data[i];
        for (let j = 0; j < stack.length; j++) {
            var currLetter = currLine[j * 4 + 1];
            if (/[A-Z]/.test(currLetter)) stack[j].push(currLetter);
        }
    }
    return stack;
}

function getTopItems(stack) {
    var items = '';
    for (let i = 0; i < stack.length; i++) {
        items += stack[i][stack[i].length - 1];
    }
    return items;
}

function moveItem(stack, from, to, amount) {
    var change = stack[from].splice(amount * -1, amount);
    for (const item of change) {
        stack[to].push(item);
    }
    return stack;
}

module.exports = {
    part1: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
            {
                input:
                    `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
                expected: "CMZ"
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
                input:
                    `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
                expected: "MCD"
            }
        ],
        solution: part2,
    },
};