/**
 * @file menu.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 13 2016
 * @description: This file contains all assets and functionality associated with the menu itself.
 * @version 0.3.2 added scrolling ocean bg to menu scene
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
            // ocean object
            this._ocean = new objects.Ocean("ocean", 1);
            this.addChild(this._ocean);
            this._titleLabel = new objects.Label("12 Parsecs Delivery", "40px custfont", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._titleLabel);
            this._subtitleLabel = new objects.Label("Air Express!", "20px custfont", "00008b", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 50);
            this.addChild(this._subtitleLabel);
            // Add buttons to scene. Register for click callback function
            this._playgameBtn = new objects.Button("playgame", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 100);
            this.addChild(this._playgameBtn);
            this._playgameBtn.on("click", this._playgameBtnClick, this);
            this._instructionsBtn = new objects.Button("instructions", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 100);
            this.addChild(this._instructionsBtn);
            this._playgameBtn.on("click", this._playgameBtnClick, this);
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
            this._ocean.update();
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
        Menu.prototype._playgameBtnClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method changes the current scene to the instructions scene when the start button is clicked
         *
         * @private
         * @method _instructionsButtonClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Menu
         * @return {void}
         */
        Menu.prototype._instructionsBtnClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            // scene = config.Scene.GAME;
            // changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=menu.js.map