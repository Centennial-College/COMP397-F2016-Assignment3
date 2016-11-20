/**
 * @file level1.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: Level1 scene extends from the abstract Game class and inherits all its behaviors and attributes
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
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        // PRIVATE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Level1() {
            _super.call(this);
            _super.prototype.start.call(this);
            this.start();
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
        Level1.prototype.start = function () {
            // Add objects to the scene
            console.log("Level 1 started...");
            // initialize game variables
            gameLevel = 1;
            // gameTime = 3
            gameTime = 20;
            gameScore = 0;
            gameParcelsRemaining = 10;
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
        Level1.prototype.update = function () {
            _super.prototype.update.call(this);
            if (this._gameOver) {
                scene = config.Scene.MENU;
                stage.cursor = "auto";
                changeScene();
            }
            if (gameParcelsRemaining == 0) {
                createjs.Sound.play("yay");
                scene = config.Scene.LEVEL2;
                stage.cursor = "auto";
                changeScene();
            }
        };
        return Level1;
    }(scenes.GameLevel));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map