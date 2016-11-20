/**
 * @file ocean.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 19 2016
 * @description: This class is used to draw and denote behavior of a UI bar at the top of the game scene
 * @version 0.8.0 added top UI bar to game scene
 */
module objects {
    export class UIBar extends createjs.Container {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _uiBar: createjs.Shape
        private _parcelImg: createjs.Sprite
        private _parcelsRemainingLabel: objects.Label
        private _timeRemainingLabel: objects.Label
        private _scoreLabel: objects.Label


        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++

        constructor() {
            super();
            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++


        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start(): void {
            // ui bar background
            this._uiBar = new createjs.Shape()
            this._uiBar.graphics.beginFill('#FFB036');
            this._uiBar.graphics.drawRect(0, 0, config.Screen.WIDTH, 40);
            this._uiBar.graphics.endFill();
            this._uiBar.graphics.setStrokeStyle(1);
            this._uiBar.graphics.beginStroke('#B26D02');
            this._uiBar.graphics.drawRect(0, 0, config.Screen.WIDTH, 40);
            this._uiBar.graphics.endStroke();
            this.addChild(this._uiBar)

            // parcels to be delivered
            this.addChild(this._parcelImg = new createjs.Sprite(textureAtlas, "parcel"))
            this._parcelImg.scaleX = this._parcelImg.scaleY = .5
            this._parcelImg.x = 50
            this._parcelImg.y = 3
            this._parcelImg.shadow = new createjs.Shadow("#000", 2, 2, 10)

            this.addChild(this._parcelsRemainingLabel = new objects.Label("x 23", "18px verdana", "#fff", config.Screen.CENTER_X - 200, 18))
            this._parcelsRemainingLabel.shadow = new createjs.Shadow("#000", 2, 2, 10)

            // time remaining
            this.addChild(this._timeRemainingLabel = new objects.Label("- TIME -\n23", "18px verdana", "#fff", config.Screen.CENTER_X + 260, 18))
            this._timeRemainingLabel.shadow = new createjs.Shadow("#000", 2, 2, 10)
            this._timeRemainingLabel.textAlign = "center"

            // score
            this.addChild(this._scoreLabel = new objects.Label("- SCORE -\n230", "18px verdana", "#fff", config.Screen.CENTER_X + 60, 18))
            this._scoreLabel.shadow = new createjs.Shadow("#000", 2, 2, 10)
            this._scoreLabel.textAlign = "center"

            // pause button
        }

        /**
         * This method updates the object's properties
         * every time it's called
         * 
         * @public 
         * @method update
         * @returns {void}
         */
        public update(): void {

            // updates ui text
            this._scoreLabel.text = "- SCORE -\n" + gameScore
            this._parcelsRemainingLabel.text = "x " + gameParcelsRemaining
            this._timeRemainingLabel.text = "- TIME -\n" + gameTime
        }
    }
}