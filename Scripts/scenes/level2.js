/**
 * @file level2.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: Level2 scene extends from the abstract Game class and inherits all its behaviors and attributes
 * @version 1.0.1 game was too easy. reduced level 2 time to 60s from 80s
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Level2() {
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
        Level2.prototype.start = function () {
            // Add objects to the scene
            console.log("Level 2 started...");
            // initialize game variables
            gameLevel = 2;
            gameTime = 60;
            gameParcelsRemaining = 20;
            // cloud array
            this._clouds = new Array();
            for (var count = 0; count < 2; count++) {
                this._clouds.push(new objects.Cloud("cloud"));
                this.addChild(this._clouds[count], this._uiBar);
            }
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
        Level2.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            // update each cloud
            this._clouds.forEach(function (cloud) {
                cloud.update();
                _this._player.checkCollision(cloud);
            });
            if (this._gameOver) {
                scene = config.Scene.GAMEOVER;
                stage.cursor = "auto";
                changeScene();
            }
            if (gameParcelsRemaining == 0) {
                createjs.Sound.stop();
                scene = config.Scene.GAMEWIN;
                stage.cursor = "auto";
                changeScene();
            }
        };
        return Level2;
    }(scenes.GameLevel));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map