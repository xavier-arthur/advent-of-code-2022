import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin
});

const pipedContent: string[] = [];

const charCodes      = Array.from({ length: 26 }).map((_, i) => i + 65);
const charsUpperCase = charCodes.map(v => String.fromCharCode(v));

// each priority is equal to the index of the char + 1
const charList  = [
    ...charsUpperCase.map(v => v.toLowerCase()),
    ...charsUpperCase
];

rl.on('line', line => pipedContent.push(line.trim()));

rl.once('close', () => {
    let totalPriority = 0;

    for (const line of pipedContent) {
        let rucksackArray = line.split('');

        // control variable so we don't sum the same item more than one time
        let itemsAccountedFor: string[] = [];

        const rucksackOne = rucksackArray.splice(0, rucksackArray.length / 2);
        const rucksackTwo = rucksackArray;

        for (const item of rucksackOne) {
            if ((rucksackTwo.includes(item)) && !itemsAccountedFor.includes(item)) {
                itemsAccountedFor.push(item);
                totalPriority += charList.indexOf(item) + 1;
            }
        }
    }
    console.log(totalPriority);
});