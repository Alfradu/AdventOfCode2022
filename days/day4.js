const parseInput = (input) => input.replaceAll(" ", "").split(/\n/);

const part1 = (input) => {
    const data = parseInput(input);
    var overlap = 0;
    for (const row of data) {
        var i = row.indexOf(',');
        var p1 = generateSections(row.substr(0, i));
        var p2 = generateSections(row.substr(i + 1));
        if (p1.indexOf(p2) != -1 || p2.indexOf(p1) != -1) overlap++;
    }

    return overlap;
}

const part2 = (input) => {
    const data = parseInput(input);
    var overlap = 0;
    for (const row of data) {
        var i = row.indexOf(',');
        var p1 = row.substr(0, i).split('-').map(v => parseInt(v));
        var p2 = row.substr(i + 1).split('-').map(v => parseInt(v));
        var r1 = [...Array(Math.abs(p1[1] - p1[0]) + 1).keys()].map(k => k + p1[0]);
        var r2 = [...Array(Math.abs(p2[1] - p2[0]) + 1).keys()].map(k => k + p2[0]);
        if (checkOverlap(r1, r2)) overlap++;
    }
    return overlap;
}

function generateSections(sections) {
    var s = sections.split('-').map(v => parseInt(v));
    var str = '';
    for (let i = s[0]; i <= s[1]; i++) {
        str += ',' + i;
    }
    return str += ',';
}

function checkOverlap(arr1, arr2) {
    for (const element of arr1) {
        if (arr2.includes(element)) return true;
    }
    return false;
}

module.exports = {
    part1: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
            {
                input: `2-4,6-8
                        2-3,4-5
                        5-7,7-9
                        2-8,3-7
                        6-6,4-6
                        2-6,4-8`,
                expected: 2
            },
            {
                input: `6-6,5-59`,
                expected: 1
            },
            {
                input: `3-6,2-6`,
                expected: 1
            },
            {
                input: `1-2,9-13`,
                expected: 0
            },
            {
                input: `2-2,20-22`,
                expected: 0
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
                input: `2-4,6-8
                        2-3,4-5
                        5-7,7-9
                        2-8,3-7
                        6-6,4-6
                        2-6,4-8`,
                expected: 4
            },
            {
                input: `2-2,3-5`,
                expected: 0
            }
        ],
        solution: part2,
    },
};