import { createInterface } from "node:readline";

const rl = createInterface({
    input: process.stdin
});

let pipedContend: string[][] = [];

// last position minus first position plus one equals the size of the routine
const getPairSize = (input: string) => {
    let ordered = input.split('-').reverse()
    return (parseInt(ordered.shift()!) - parseInt(ordered.shift()!)) + 1;
}

const range = (start: number|string, end: number|string) => {
    let tmp: number[] = []

    if (typeof start == 'string') {
        start = parseInt(start);
    }

    if (typeof end == 'string') {
        end = parseInt(end);
    }

    for (let i = start; i <= end; i++)
        tmp.push(i);

    return tmp;
};

rl.on('line', line => {
    pipedContend.push(line.split(','));
});

rl.on('close', () => {
    let routinesUnionCount = 0;

    for (const pair of pipedContend) {
        let firstLength = getPairSize(pair[0]);
        let secondLength = getPairSize(pair[1]);

        let biggestInterval: number[];
        let smallerInterval: number[];

        // intervals are the min/max of each routine
        biggestInterval = pair[firstLength > secondLength ? 0 : 1].split('-').map(v => parseInt(v));
        smallerInterval = pair[firstLength > secondLength ? 1 : 0].split('-').map(v => parseInt(v));

        // this gets the intevals and creates arrays from it
        let biggestPairRange = range(biggestInterval[0], biggestInterval[1]);
        let smallerPairRange = range(smallerInterval[0], smallerInterval[1]);

        // if the bigger array contains every element from the smaller
        if (smallerPairRange.every(v => biggestPairRange.includes(v))) {
            routinesUnionCount++;
        }
    }

    console.log(routinesUnionCount);
});