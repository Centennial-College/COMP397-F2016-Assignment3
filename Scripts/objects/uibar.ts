/**
 * @file ocean.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 19 2016
 * @description: This class is used to draw and denote behavior of a UI bar at the top of the game scene
 * @version 0.9.0 implemented scoring system
 */
module objects {
    export class UIBar extends createjs.Container {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _uiBar: createjs.Shape
        private _parcelImg: createjs.Sprite
        private _parcelsRemainingLabel: objects.Label
        private _timeRemainingLabel: objects.Label
        private _scoreLabel: objects.Label

        // used to determine whether one second has passed since last checked with createjs.Ticker
        private _oldGameTime: number
        private _newGameTime: number


        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++

        constructor() {
            super();
            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        private _updateGameTime(): void {
            this._newGameTime = createjs.Ticker.getTime()

            // at least one second has passed since last gametime update
            // can't do == because we cant match the milliseconds accurately enough
            if (this._newGameTime >= this._oldGameTime + 1000) {
                gameTime--
                this._oldGameTime = this._newGameTime
            }
        }

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

            // only check time when ticker is not paused/runtime is true  
            this._oldGameTime = createjs.Ticker.getTime(true)

            // ui bar background
            this._uiBar = new createjs.Shape()
            this._uiBar.graphics.beginLinearGradientFill(["#B26D02", "#FFB036"], [0, 1], 0, 0, 0, 120)
            // this._uiBar.graphics.beginRadialGradientFill(["#000","#FFB036"], [0, 1], config.Screen.CENTER_X, 20, 600, config.Screen.CENTER_X, 20, 50)
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
            this._updateGameTime()

            // updates ui text
            this._scoreLabel.text = "- SCORE -\n" + gameScore.toFixed(0)
            this._parcelsRemainingLabel.text = "x " + gameParcelsRemaining
            this._timeRemainingLabel.text = "- TIME -\n" + gameTime
        }
    }
}