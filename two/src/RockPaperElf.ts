import ResolverSheet from "./@types/ResolverSheet";
import { RockPaperInput } from "./@types/RockPaperInput";
import ScoreSheet from "./@types/ScoreSheet";

export default class RockPaperElf {

    /* <key> wins against <value> */
    private resolverSheet: ResolverSheet = {
        'Z': 'A',
        'X': 'B',
        'Y': 'C',
    };

    private equivalencySheet: ResolverSheet = {
        'A': 'X',
        'B': 'Y',
        'C': 'Z'
    }

    private scoreSheet: ScoreSheet = {
        'X': 1,
        'Y': 2,
        'Z': 3
    }

    private gameResult?: number = undefined;

    public totalPoints = 0;

    private LOSE = -1;
    private DRAW = 0;
    private WIN  = 1;

    constructor(
        private myInput?: RockPaperInput, 
        private theirInput?: RockPaperInput
    ) { }

    private resolveGame = () => {
        if (!this.myInput || !this.theirInput)
            return;

        let equivalentTo = this.equivalencySheet[this.theirInput];

        // console.log({ 0: this.myInput, 1: this.theirInput }, this.resolverSheet[this.myInput]);

        if (this.myInput == equivalentTo)
            this.gameResult = this.DRAW;
        else if (this.resolverSheet[this.myInput] == this.theirInput)
            this.gameResult = this.LOSE
        else
            this.gameResult = this.WIN;

        this.calculateScore()

        return this;
    };

    private calculateScore = () => {
        if (!this.myInput || !this.theirInput)
            return;

        let sum = 0;

        sum += this.scoreSheet[this.myInput];
        // console.log({ 'gameResult': this.gameResult } );

        if (this.gameResult == this.WIN)
            sum += 6;
        else if (this.gameResult == this.DRAW)
            sum += 3
        
        this.totalPoints += sum;

        return this;
    };

    public newGame = (myInput: RockPaperInput, theirInput: RockPaperInput) => {
        this.myInput = myInput;
        this.theirInput = theirInput;
        return this;
    }

    public play = () => this.resolveGame();
}