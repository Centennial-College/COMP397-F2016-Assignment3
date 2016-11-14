/**
 * @file game.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 14 2016
 * @description: Game scene that contains all assets and functionality associated with the game itself
 * @version 0.6.0 added objects/player class
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
            // ocean object
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);
            // island object
            this._island = new objects.Island("island");
            this.addChild(this._island);
            // player object 
            this._player = new objects.Player("plane");
            this.addChild(this._player);
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
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map