/**
 * @file game.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 19 2016
 * @description: Game scene that contains all assets and functionality associated with the game itself
 * @version 0.9.1 hide cursor when game starts to give enhanced user experience
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Game() {
            _super.call(this);
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
        Game.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // hides cursor when game scene starts
            stage.cursor = 'none';
            // initialize game variables
            gameLevel = 1;
            gameTime = 60;
            gameScore = 0;
            gameParcelsRemaining = 10;
            this.addChild(this._ocean = new objects.Ocean("ocean"));
            this.addChild(this._island = new objects.Island("island"));
            this.addChild(this._player = new objects.Player("plane"));
            this.addChild(this._uiBar = new objects.UIBar());
            // this._uiBar.shadow = new createjs.Shadow('#000', 1, 1, 20)
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
        Game.prototype.update = function () {
            // Update objects
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._uiBar.update();
            // check for collisions
            this._player.checkCollision(this._island);
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map