import { createInterface } from 'node:readline';
import { stdin as input } from 'process';
import RockPaperElf from './RockPaperElf.js';
var rl = createInterface({ input: input });
var data = [];
rl.on('line', function (line) {
    data.push(line);
});
rl.once('close', function () {
    var dataInput = data.map(function (v) { return v.split(' '); });
    var ElfMommy = new RockPaperElf();
    dataInput.forEach(function (pair) {
        var mine = pair[1];
        var theirs = pair[0];
        ElfMommy.newGame(mine, theirs).play();
    });
    console.log(ElfMommy.totalPoints);
});
