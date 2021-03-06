/**
 * @file gameover.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: GameOver scene is used to display game over message and redirect the player to menu or level 1 again
 * @version 0.14.0 added scenes/loadingscreen.ts
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
          * @memberOf Menu
          * @return {void}
          */
        GameOver.prototype.start = function () {
            // ocean object
            this._ocean = new objects.Ocean("ocean", 1);
            // 5x5 Box Blur filter on bg image
            var blurFilter = new createjs.BlurFilter(5, 5);
            this._ocean.filters = [blurFilter];
            var bitmapBounds = this._ocean.getBounds();
            this._ocean.cache(bitmapBounds.x, bitmapBounds.y, bitmapBounds.width, bitmapBounds.height);
            this.addChild(this._ocean);
            this._titleLabel = new objects.Label("You are Fired!", "50px custfont", "#f00", config.Screen.CENTER_X, -5000);
            this._titleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15);
            createjs.Tween.get(this._titleLabel).wait(500).to({
                x: config.Screen.CENTER_X,
                y: config.Screen.CENTER_Y - 50,
            }, 1500, createjs.Ease.backOut);
            this.addChild(this._titleLabel);
            this._scoreLabel = new objects.Label("You took too much time to deliver the parcels.\nYour final score was: " + gameScore.toFixed(0), "20px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 25);
            this._scoreLabel.shadow = new createjs.Shadow("#444", 2, 2, 2);
            this._scoreLabel.alpha = 0.8;
            // Add buttons to scene. Register for click callback function
            this._playAgainBtn = new objects.Button("playagain", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 115);
            this._playAgainBtn.shadow = new createjs.Shadow('#000', 5, 5, 15);
            this._playAgainBtn.on("click", this._playAgainBtnClick, this);
            this._menuBtn = new objects.Button("gotomenu", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 115);
            this._menuBtn.shadow = new createjs.Shadow('#000', 5, 5, 15);
            this._menuBtn.on("click", this._menuBtnClick, this);
            //add to panel for animation purposes
            this._bottomPanel = new createjs.Container();
            this._bottomPanel.addChild(this._playAgainBtn);
            this._bottomPanel.addChild(this._menuBtn);
            this._bottomPanel.addChild(this._scoreLabel);
            this._bottomPanel.alpha = 0;
            createjs.Tween.get(this._bottomPanel).wait(2000).to({
                alpha: 1
            }, 2000, createjs.Ease.cubicIn);
            this.addChild(this._bottomPanel);
            createjs.Sound.play('gameover');
            // Add scene to global stage container
            stage.addChild(this);
        };
        /**
         * This method runs when the Scene updates
         *
         * @public
         * @method update
         *
         * @memberOf GameOver
         * @return {void}
         */
        GameOver.prototype.update = function () {
            this._ocean.update();
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method changes the current scene to the game scene when the play again button is clicked
         *
         * @private
         * @method _playAgainBtnClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf GameOver
         * @return {void}
         */
        GameOver.prototype._playAgainBtnClick = function (event) {
            // Change global scene variable to LEVEL1. Call global changeScene() function
            scene = config.Scene.LOADING1;
            changeScene();
        };
        /**
         * This method changes the current scene to the menu scene when the menu button is clicked
         *
         * @private
         * @method _menuBtnClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf GameOver
         * @return {void}
         */
        GameOver.prototype._menuBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=gameover.js.map