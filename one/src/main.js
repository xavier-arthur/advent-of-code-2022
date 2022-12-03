'use strict';

import * as readline from 'node:readline';

const input = readline.createInterface({
    input: process.stdin,
});

/*
    for each line that is pure whitespace a new array is create in the variable
    data, lines that don't test against the blank line regex are pushed to the
    last position of the array making a matrix only with the inputs
*/
let data = [[]];
input.on('line', line => {
    let entry;

    if (/^\s*$/.test(line))
        entry = [];
    else
        entry = line;

    if (entry instanceof Array)
        data.push(entry);
    else
        data[data.length - 1].push(line);
});

input.once('close', () => {
    // map the array so it return all its sub arrays are reduce to a sum of all elements
    let sum = data.map(innerArray => { 
        return innerArray.reduce((carry, current) => carry += parseInt(current), 0)
    });

    console.log(Math.max(...sum));
});