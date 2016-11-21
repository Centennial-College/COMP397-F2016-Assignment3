var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file ocean.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 19 2016
 * @description: This class is used to draw and denote behavior of a UI bar at the top of the game scene
 * @version 0.12.2 updated scenes/instructions.ts background roundrect
 */
var objects;
(function (objects) {
    var UIBar = (function (_super) {
        __extends(UIBar, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        function UIBar() {
            _super.call(this);
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        UIBar.prototype._updateGameTime = function () {
            this._newGameTime = createjs.Ticker.getTime();
            // at least one second has passed since last gametime update
            // can't do == because we cant match the milliseconds accurately enough
            if (this._newGameTime >= this._oldGameTime + 1000) {
                gameTime--;
                this._oldGameTime = this._newGameTime;
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        UIBar.prototype.start = function () {
            // only check time when ticker is not paused/runtime is true  
            this._oldGameTime = createjs.Ticker.getTime(true);
            // ui bar background
            this._uiBar = new createjs.Shape();
            this._uiBar.graphics.beginLinearGradientFill(["#ccc", "#444"], [0, 1], 0, 0, 0, 40);
            // this._uiBar.graphics.beginLinearGradientFill(["#B26D02", "#FFB036"], [0, 1], 0, 0, 0, 120)
            this._uiBar.graphics.drawRect(0, 0, config.Screen.WIDTH, 40);
            this._uiBar.graphics.endFill();
            this._uiBar.graphics.setStrokeStyle(1);
            this._uiBar.graphics.beginStroke('#888');
            this._uiBar.graphics.drawRect(0, 0, config.Screen.WIDTH, 40);
            this._uiBar.graphics.endStroke();
            this.addChild(this._uiBar);
            // parcels to be delivered
            this.addChild(this._parcelImg = new createjs.Sprite(textureAtlas, "parcel"));
            this._parcelImg.scaleX = this._parcelImg.scaleY = .5;
            this._parcelImg.x = 50;
            this._parcelImg.y = 3;
            this._parcelImg.shadow = new createjs.Shadow("#000", 2, 2, 10);
            this.addChild(this._parcelsRemainingLabel = new objects.Label("x 23", "18px verdana", "#fff", config.Screen.CENTER_X - 200, 18));
            this._parcelsRemainingLabel.shadow = new createjs.Shadow("#000", 2, 2, 10);
            // time remaining
            this.addChild(this._timeRemainingLabel = new objects.Label("- TIME -\n23", "18px verdana", "#fff", config.Screen.CENTER_X + 260, 18));
            this._timeRemainingLabel.shadow = new createjs.Shadow("#000", 2, 2, 10);
            this._timeRemainingLabel.textAlign = "center";
            // score
            this.addChild(this._scoreLabel = new objects.Label("- SCORE -\n230", "18px verdana", "#fff", config.Screen.CENTER_X + 60, 18));
            this._scoreLabel.shadow = new createjs.Shadow("#000", 2, 2, 10);
            this._scoreLabel.textAlign = "center";
            // pause button
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        UIBar.prototype.update = function () {
            this._updateGameTime();
            // updates ui text
            this._scoreLabel.text = "- SCORE -\n" + gameScore.toFixed(0);
            this._parcelsRemainingLabel.text = "x " + gameParcelsRemaining;
            this._timeRemainingLabel.text = "- TIME -\n" + gameTime;
        };
        return UIBar;
    }(createjs.Container));
    objects.UIBar = UIBar;
})(objects || (objects = {}));
//# sourceMappingURL=uibar.js.map