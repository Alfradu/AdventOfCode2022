const part1 = (input) => {
    var messageLength = 4;
    var [pos, marker] = getMessagePackage(input, messageLength);
    return pos;
}

const part2 = (input) => {
    var messageLength = 14;
    var [pos, marker] = getMessagePackage(input, messageLength);
    return pos;
}

function getMessagePackage(string, length){
    var marker = '';
    for (let position = 0; position+length < string.length; position++) {
        marker = string.substring(position, position+length);
        if (marker.split('').some((v,i,a) => a.lastIndexOf(v)!=i)) continue;
        else return [position+length, marker];
    }
    return (-1, "")
}
module.exports = {
    part1: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
            {
                input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
                expected: 7
            },
            {
                input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
                expected: 5
            },
            {
                input: `nppdvjthqldpwncqszvftbrmjlhg`,
                expected: 6
            },
            {
                input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
                expected: 10
            },
            {
                input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
                expected: 11
            },
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
                input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
                expected: 19
            },
            {
                input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
                expected: 23
            },
            {
                input: `nppdvjthqldpwncqszvftbrmjlhg`,
                expected: 23
            },
            {
                input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
                expected: 29
            },
            {
                input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
                expected: 26
            },
        ],
        solution: part2,
    },
};