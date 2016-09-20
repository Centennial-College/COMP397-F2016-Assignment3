/**
 * @file gameover.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: This file is the gameover scene for the game.
 * @version 0.1.0
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method runs when the scene is started
         *
         * @public
         * @method start
         *
         * @memberOf Gameover
         * @return {void}
         */
        GameOver.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            this._marioButton = new objects.Button("Mario", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._marioButton);
            this._marioButton.on('click', this._marioClick, this);
            stage.addChild(this);
        };
        /**
         * This method runs when the scene needs to be updated
         *
         * @public
         * @method update
         *
         * @memberOf Gameover
         * @return {void}
         */
        GameOver.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is the event handler for the mario button click event.
         *
         * @private
         * @param {createjs.MouseEvent} event
         *
         * @memberOf GameOver
         * @return {void}
         */
        GameOver.prototype._marioClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=gameover.js.map