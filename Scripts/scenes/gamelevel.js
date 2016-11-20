/**
 * @file gamelevel.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: GameLevel scene that contains all assets and functionality associated with the game itself
 * @version 0.11.1 added goal sound, yay sound and gameover sounds
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
            // check for collisions
            this._player.checkCollision(this._island);
        };
        return GameLevel;
    }(objects.Scene));
    scenes.GameLevel = GameLevel;
})(scenes || (scenes = {}));
//# sourceMappingURL=gamelevel.js.map