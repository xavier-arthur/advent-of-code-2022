var RockPaperElf = /** @class */ (function () {
    function RockPaperElf(myInput, theirInput) {
        var _this = this;
        this.myInput = myInput;
        this.theirInput = theirInput;
        /* <key> wins against <value> */
        this.resolverSheet = {
            'Z': 'A',
            'X': 'B',
            'Y': 'C'
        };
        this.equivalencySheet = {
            'A': 'X',
            'B': 'Y',
            'C': 'Z'
        };
        this.scoreSheet = {
            'X': 1,
            'Y': 2,
            'Z': 3
        };
        this.gameResult = undefined;
        this.totalPoints = 0;
        this.LOSE = -1;
        this.DRAW = 0;
        this.WIN = 1;
        this.resolveGame = function () {
            if (!_this.myInput || !_this.theirInput)
                return;
            var equivalentTo = _this.equivalencySheet[_this.theirInput];
            // console.log({ 0: this.myInput, 1: this.theirInput }, this.resolverSheet[this.myInput]);
            if (_this.myInput == equivalentTo)
                _this.gameResult = _this.DRAW;
            else if (_this.resolverSheet[_this.myInput] == _this.theirInput)
                _this.gameResult = _this.LOSE;
            else
                _this.gameResult = _this.WIN;
            _this.calculateScore();
            return _this;
        };
        this.calculateScore = function () {
            if (!_this.myInput || !_this.theirInput)
                return;
            var sum = 0;
            sum += _this.scoreSheet[_this.myInput];
            // console.log({ 'gameResult': this.gameResult } );
            if (_this.gameResult == _this.WIN)
                sum += 6;
            else if (_this.gameResult == _this.DRAW)
                sum += 3;
            _this.totalPoints += sum;
            return _this;
        };
        this.newGame = function (myInput, theirInput) {
            _this.myInput = myInput;
            _this.theirInput = theirInput;
            return _this;
        };
        this.play = function () { return _this.resolveGame(); };
    }
    return RockPaperElf;
}());
export default RockPaperElf;
