const parseInput = (input) => input.split('\n');

const part1 = (input) => {
    const data = parseInput(input);
    var result = 0;
    var x = 1;
    var cycles = 0;
    for (var line of data) {
        var instruction = line.split(' ');
        switch (instruction[0]) {
            case 'addx':
                for (let i = 0; i < 2; i++) {
                    cycles++;
                    if ((cycles - 20) % 40 == 0) result += x * cycles;
                }
                x += parseInt(instruction[1]);
                break;
            case 'noop':
                cycles++;
                if ((cycles - 20) % 40 == 0) result += x * cycles;
                break;
        }
    }
    return result;
}

const part2 = (input) => {
    const data = parseInput(input);
    var w = 40;
    var h = 6;
    var x = 1;
    var cycles = 0;
    var display = '';
    for (var line of data) {
        var instruction = line.split(' ');
        switch (instruction[0]) {
            case 'addx':
                for (let i = 0; i < 2; i++) {
                    display += (cycles % w == x - 1 || cycles % w == x || cycles % w == x + 1) ? '#' : '.';
                    cycles++;
                }
                x += parseInt(instruction[1]);
                break;
            case 'noop':
                display += (cycles % w == x - 1 || cycles % w == x || cycles % w == x + 1) ? '#' : '.';
                cycles++;
                break;
        }
    }

    for (let row = 1; row < h; row++) {
        display = display.substring(0, w * row + (row - 1)) + '\n' + display.substring(w * row + (row - 1));
    }
    console.log(display);
    return display;
}

module.exports = {
    part1: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
            {
                input: `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`,
                expected: 13140
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
                input: `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`,
                expected: `###..####.####.####.#..#.###..####..##..
#..#.#.......#.#....#.#..#..#.#....#..#.
#..#.###....#..###..##...###..###..#..#.
###..#.....#...#....#.#..#..#.#....####.
#.#..#....#....#....#.#..#..#.#....#..#.
#..#.#....####.####.#..#.###..#....#..#.`
            }
        ],
        solution: part2,
    },
};