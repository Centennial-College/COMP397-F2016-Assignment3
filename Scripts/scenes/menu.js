/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: This file contains all assets and functionality associated with the menu itself.
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
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
          * This method runs when the scene is started
          *
          * @public
          * @method start
          *
          * @memberOf Menu
          * @return {void}
          */
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._menuLabel = new objects.Label("Welcome to Menu Scene", "40px Arial", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._menuLabel);
            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);
            this._menuButtonGameOver = new objects.Button("GameOver", config.Screen.CENTER_X, config.Screen.CENTER_Y - 180);
            this.addChild(this._menuButtonGameOver);
            this._menuButtonGameOver.on("click", this._gameOverButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        /**
         * This method runs when the Menu Scene updates
         *
         * @public
         * @method update
         *
         * @memberOf Menu
         * @return {void}
         */
        Menu.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method changes the current scene to the game scene when the start button is clicked
         *
         * @private
         * @method _startButtonClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Menu
         * @return {void}
         */
        Menu.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        };
        /**
         * This method changes the current scene to the gameover scene when the gameover button is clicked
         *
         * @private
         * @method _gameOverButtonClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Menu
         * @return {void}
         */
        Menu.prototype._gameOverButtonClick = function (event) {
            scene = config.Scene.GAMEOVER;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=menu.js.map