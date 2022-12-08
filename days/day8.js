const parseInput = (input) => input.split('\n');

const part1 = (input) => {
    const data = parseInput(input);
    var xMax = data[0].length - 1;
    var yMax = data.length - 1;
    var visibleTrees = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (j == 0 || i == 0 || i == xMax || j == yMax) {
                visibleTrees++;
                continue
            }
            if (isVisible(data, [i, j])) visibleTrees++;
        }
    }
    return visibleTrees;
}

const part2 = (input) => {
    const data = parseInput(input);
    var xMax = data[0].length - 1;
    var yMax = data.length - 1;
    var scenicScores = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (j == 0 || i == 0 || i == xMax || j == yMax) {
                scenicScores.push(0);
                continue
            }
            scenicScores.push(getScenicScore(data, [i, j]));
        }
    }
    return scenicScores.reduce((a, b) => a > b ? a : b );
}

function isVisible(forest, tree) {
    var currTree = parseInt(forest[tree[0]][tree[1]]);
    var left = !forest[tree[0]].substring(0, tree[1]).split('').map(m => parseInt(m)).some(v => v >= currTree);
    var right = !forest[tree[0]].substring(tree[1] + 1).split('').map(m => parseInt(m)).some(v => v >= currTree);
    var treeColumn = forest.map(v => parseInt(v[tree[1]]));
    var up = !treeColumn.filter((_, i) => i < tree[0]).some(v => v >= currTree);
    var down = !treeColumn.filter((_, i) => i > tree[0]).some(v => v >= currTree);
    return left || right || up || down;
}

function getScenicScore(forest, tree) {
    var currTree = parseInt(forest[tree[0]][tree[1]]);
    var left = getVision(forest[tree[0]].substring(0, tree[1]).split('').map(m => parseInt(m)).reverse(), currTree);
    var right = getVision(forest[tree[0]].substring(tree[1] + 1).split('').map(m => parseInt(m)), currTree);
    var treeColumn = forest.map(v => parseInt(v[tree[1]]));
    var up = getVision(treeColumn.filter((_, i) => i < tree[0]).reverse(), currTree);
    var down = getVision(treeColumn.filter((_, i) => i > tree[0]), currTree);
    return left * right * up * down;
}

function getVision(treeLine, currentTree){
    var vision = 0;
    for (const tree of treeLine) {
        vision++;
        if (tree >= currentTree) break;
    }
    return vision;
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
                    `30373
25512
65332
33549
35390`,
                expected: 21
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
                    `30373
25512
65332
33549
35390`,
                expected: 8
            }
        ],
        solution: part2,
    },
};