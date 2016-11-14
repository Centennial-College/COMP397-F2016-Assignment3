/**
 * @file menu.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 13 2016
 * @description: This file contains all assets and functionality associated with the menu itself.
 * @version 0.4.1 added boxblur filter to the ocean bg on title scene
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
            // 5x5 Box Blur filter on bg image
            var blurFilter = new createjs.BlurFilter(5, 5);
            this._ocean.filters = [blurFilter];
            var bitmapBounds = this._ocean.getBounds();
            this._ocean.cache(bitmapBounds.x, bitmapBounds.y, bitmapBounds.width, bitmapBounds.height);
            this.addChild(this._ocean);
            this._titleLabel = new objects.Label("12 Parsecs Delivery", "50px custfont", "#fff", -5000, config.Screen.CENTER_Y);
            // this._titleLabel = new objects.Label("12 Parsecs Delivery", "50px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._titleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15);
            createjs.Tween.get(this._titleLabel).wait(500).to({
                x: config.Screen.CENTER_X,
                y: config.Screen.CENTER_Y,
            }, 1500, createjs.Ease.backOut);
            this.addChild(this._titleLabel);
            // stamping effect for subtitle
            this._subtitleLabel = new objects.Label("Air Express!", "40px custfont", "#98D9FF", 10000, -10000);
            this._subtitleLabel.scaleX = this._subtitleLabel.scaleY = 500;
            this._subtitleLabel.alpha = 0;
            createjs.Tween.get(this._subtitleLabel).wait(2000).to({
                x: config.Screen.CENTER_X + 100,
                y: config.Screen.CENTER_Y - 50,
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 3000, createjs.Ease.circIn);
            // this._subtitleLabel = new objects.Label("Air Express!", "40px custfont", "#ddd", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y - 50)
            this._subtitleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15);
            this._subtitleLabel.rotation = -7;
            this.addChild(this._subtitleLabel);
            this._authorLabel = new objects.Label("Developed by: Kevin Ma (2016)", "20px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50);
            this._authorLabel.shadow = new createjs.Shadow("#000", 2, 2, 2);
            this._authorLabel.alpha = 0.8;
            // Add buttons to scene. Register for click callback function
            this._playgameBtn = new objects.Button("playgame", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 115);
            this._playgameBtn.shadow = new createjs.Shadow('#000', 5, 5, 15);
            this._playgameBtn.on("click", this._playgameBtnClick, this);
            this._instructionsBtn = new objects.Button("instructions", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 115);
            this._instructionsBtn.shadow = new createjs.Shadow('#000', 5, 5, 15);
            this._instructionsBtn.on("click", this._playgameBtnClick, this);
            //add to panel for animation purposes
            this._bottomPanel = new createjs.Container();
            this._bottomPanel.addChild(this._authorLabel);
            this._bottomPanel.addChild(this._playgameBtn);
            this._bottomPanel.addChild(this._instructionsBtn);
            // this._bottomPanel.y = 5000
            this._bottomPanel.alpha = 0;
            createjs.Tween.get(this._bottomPanel).wait(2000).to({
                alpha: 1
            }, 2000, createjs.Ease.cubicIn);
            this.addChild(this._bottomPanel);
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