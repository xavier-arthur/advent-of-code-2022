import { createInterface } from 'node:readline';
import  { stdin as input } from 'process'
import { RockPaperInput } from './@types/RockPaperInput';
import RockPaperElf from './RockPaperElf.js';

const rl = createInterface({ input });

let data: string[] = [];
rl.on('line', line => {
    data.push(line);
});

rl.once('close', () => {
    let dataInput = data.map(v => v.split(' ') as unknown as RockPaperInput[]);

    const ElfMommy = new RockPaperElf();
    dataInput.forEach(pair => {
        let mine   = pair[1];
        let theirs = pair[0];

        ElfMommy.newGame(mine, theirs).play();

    });

    console.log(ElfMommy.totalPoints);
});