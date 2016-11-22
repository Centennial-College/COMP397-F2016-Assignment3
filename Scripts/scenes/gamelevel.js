/**
 * @file gamelevel.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: GameLevel scene that contains all assets and functionality associated with the game itself
 * @version 1.1.0 added combo system; refactored scoring system
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    var GameLevel = (function (_super) {
        __extends(GameLevel, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameLevel() {
            _super.call(this);
            this._gameOver = false;
        }
        // PUBLIC FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function creates the game objects and adds them to the stage
         *
         * @public
         * @method start
         *
         * @memberOf Game
         * @return {void}
         */
        GameLevel.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // hides cursor when game scene starts
            stage.cursor = 'none';
            this.addChild(this._ocean = new objects.Ocean("ocean"));
            this.addChild(this._island = new objects.Island("island"));
            this.addChild(this._player = new objects.Player("plane"));
            this.addChild(this._uiBar = new objects.UIBar());
            // this._uiBar.shadow = new createjs.Shadow('#000', 1, 1, 20)
            this._bgMusic = createjs.Sound.play("engine");
            this._bgMusic.loop = -1; //loop forever    
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        /**
         * This function updates the objects contained in the game scene
         *
         * @public
         * @method update
         *
         * @memberOf Game
         * @return {void}
         */
        GameLevel.prototype.update = function () {
            // Update objects
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._uiBar.update();
            if (gameTime <= 0) {
                createjs.Sound.stop();
                this._gameOver = true;
            }
            console.log('has been touched ' + this._island.hasBeenTouched);
            // check for collisions
            if (this._player.checkCollision(this._island)) {
                // if island has not been touched, then combo restarts
                this._island.hasBeenTouched = true;
                // generate combo text and let fade away
                this.addChild(this._comboLabel = new objects.Label("Combo x " + gameCombo, "20px custfont", "#fff", this._player.x, this._player.y));
                // this.addChild(this._comboLabel = new objects.Label("Combo x " + gameCombo, "20px custfont", "#" + this.generateRandomColor(), this._player.x, this._player.y))
                // this._comboLabel.shadow = new createjs.Shadow("#000", 2, 2, 2)
                this._comboLabel.shadow = new createjs.Shadow("#" + this.generateRandomColor(), 0, 0, 2);
                var xd = "#" + this.generateRandomColor();
                console.log(xd);
                createjs.Tween.get(this._comboLabel)
                    .to({ alpha: 0, y: this._comboLabel.y - 100 }, 1000)
                    .call(function () {
                    stage.removeChild(this._comboLabel);
                });
                console.log('collision at ' + createjs.Ticker.getTime());
            }
            else if (this._island.y >= this._player.y + this._player.halfHeight &&
                !this._island.hasBeenTouched) {
                gameCombo = 0;
            }
        };
        /**
         * This method randomly generates a color in hexadecimal format
         *
         * @returns {string}
         *
         * @memberOf GameLevel
         */
        GameLevel.prototype.generateRandomColor = function () {
            var color = "";
            for (var i = 0; i < 6; i++) {
                color += this._generateHexadecimalDigit();
            }
            return color;
        };
        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method randomly generates a hexadecimal digit and returns it to the calling method
         *
         * @private
         * @returns {string}
         *
         * @memberOf GameLevel
         */
        GameLevel.prototype._generateHexadecimalDigit = function () {
            var ranNum;
            ranNum = Math.floor(Math.random() * 16);
            if (ranNum < 10)
                return ranNum.toString();
            else
                switch (ranNum) {
                    case 10:
                        return 'A';
                    case 11:
                        return 'B';
                    case 12:
                        return 'C';
                    case 13:
                        return 'D';
                    case 14:
                        return 'E';
                    case 15:
                        return 'F';
                }
        };
        return GameLevel;
    }(objects.Scene));
    scenes.GameLevel = GameLevel;
})(scenes || (scenes = {}));
//# sourceMappingURL=gamelevel.js.map