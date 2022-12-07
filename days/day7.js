const parseInput = (input) => buildFileTree(input.split('\n'));

const part1 = (input) => {
    var fileStructure = parseInput(input);
    var fileStructure = calculateSizes(fileStructure, fileStructure[0].id);
    var toDelete = fileStructure.filter(n => n.size <= 100000 && n.type == 'dir');
    var totSize = toDelete.map(m => m.size).reduce((a, b) => a + b);
    return totSize;
}

const part2 = (input) => {
    var fileStructure = parseInput(input);
    var fileStructure = calculateSizes(fileStructure, fileStructure[0].id);
    var maxMem = 70000000;
    var updateSize = 30000000;
    var usedMem = fileStructure[0].size;
    var unusedMem = maxMem - usedMem;
    var toDelete = fileStructure.filter(n => n.size > updateSize-unusedMem && n.type == 'dir').map(m => m.size).sort((a,b) => a - b)[0];
    return toDelete;
}

function calculateSizes(fs, startPointer) {
    var currNode = fs.find(n => n.id == startPointer)
    if (currNode.children.length == 0) { return currNode.size }
    else if (fs[0].id != startPointer) {
        for (let i = 0; i < currNode.children.length; i++) {
            const childNode = currNode.children[i];
            currNode.size += calculateSizes(fs, childNode.id);
        }
        return currNode.size;
    }
    else {
        for (let i = 0; i < currNode.children.length; i++) {
            const childNode = currNode.children[i];
            currNode.size += calculateSizes(fs, childNode.id);
        }
        return fs;
    }
}

function buildFileTree(data) {
    var fileStructure = [];
    var rootNode = new Node('/', 'dir');
    fileStructure.push(rootNode);
    var pointer = rootNode;
    for (let i = 0; i < data.length; i++) {
        var lineSplit = data[i].split(' ');
        switch (lineSplit[0]) {
            case "$":
                if (lineSplit[1] == 'cd' && lineSplit[2] == '..') { pointer = pointer.parent }
                else if (lineSplit[1] == 'cd') { pointer = pointer.children.find(c => c.name == lineSplit[2]) || rootNode }
                else if (lineSplit[1] == 'ls') { }
                break;
            case "dir":
                var newNode = new Node(lineSplit[1], 'dir', pointer);
                pointer.children.push(newNode);
                fileStructure.push(newNode);
                break;
            default: //files
                var newNode = new Node(lineSplit[1], 'file', pointer, [], parseInt(lineSplit[0]));
                pointer.children.push(newNode);
                fileStructure.push(newNode);
                break;
        }
    }
    return fileStructure;
}

class Node {
    constructor(name, type, parent = null, children = [], size = 0) {
        this.name = name;
        this.type = type;
        this.parent = parent;
        this.children = children;
        this.size = size;
        this.id = Math.floor(Math.random() * Date.now());
    }
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
                    `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,
                expected: 95437
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
                    `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,
                expected: 24933642
            }
        ],
        solution: part2,
    },
};