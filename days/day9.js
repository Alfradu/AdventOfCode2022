const parseInput = (input) => input.split('\n');

const part1 = (input) => {
    const data = parseInput(input);
    var knots = createRope(2);
    return runSimulation(knots, data);
}

const part2 = (input) => {
    const data = parseInput(input);
    var knots = createRope(10);
    return runSimulation(knots, data);
}

function isInRange(t, h) {
    var grid = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 0],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ]
    return grid.some(s => s[0] + t[0] == h[0] && s[1] + t[1] == h[1]);
}

function runSimulation(knots, data) {
    var visited = [[0, 0]];
    for (let i = 0; i < data.length; i++) {
        const instr = data[i].split(' ');
        var change;
        switch (instr[0]) {
            case 'L':
                change = [0, -1];
                break;
            case 'R':
                change = [0, 1];
                break;
            case 'U':
                change = [1, 0]
                break;
            case 'D':
                change = [-1, 0]
                break;
        }
        for (let j = 0; j < parseInt(instr[1]); j++) {
            knots[0][0] += change[0];
            knots[0][1] += change[1];
            for (var knot = 1; knot < knots.length; knot++) {
                if (!isInRange(knots[knot], knots[knot - 1])) {
                    var direction = getDirection(knots[knot-1], knots[knot]);
                    knots[knot][0]+= direction[0];
                    knots[knot][1]+= direction[1];
                    if (!visited.some(s => s[0] == knots[knot][0] && s[1] == knots[knot][1]) && knot == knots.length - 1) visited.push([knots[knot][0], knots[knot][1]]);
                }
            }
        }
    }
    return visited.length;
}

function getDirection(goal, start){
    var direction = [0,0];
    direction[0] = goal[0] > start[0] ? 1 : goal[0] < start[0] ? -1 : 0;
    direction[1] = goal[1] > start[1] ? 1 : goal[1] < start[1] ? -1 : 0;
    return direction;
}

function createRope(knots) {
    var arr = []
    for (let i = 0; i < knots; i++) {
        arr.push([0, 0]);
    }
    return arr;
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
                    `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`,
                expected: 13
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
                    `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`,
                expected: 1
            },
            {
                input:
                    `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`,
                expected: 36
            }
        ],
        solution: part2,
    },
};