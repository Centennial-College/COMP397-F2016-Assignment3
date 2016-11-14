/**
 * @file menu.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 13 2016
 * @description: This file contains all assets and functionality associated with the menu itself.
 * @version 0.4.0 added animations to title scene
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Menu extends objects.Scene {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        private _playgameBtn: objects.Button;
        private _instructionsBtn: objects.Button;
        private _titleLabel: objects.Label;
        private _subtitleLabel: objects.Label
        private _authorLabel: objects.Label
        private _ocean: objects.Ocean;

        private _bottomPanel: createjs.Container;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
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
        public start(): void {
            console.log("Menu Scene Started");

            // ocean object
            this._ocean = new objects.Ocean("ocean", 1);
            this.addChild(this._ocean);

            this._titleLabel = new objects.Label("12 Parsecs Delivery", "50px custfont", "#fff", -5000, config.Screen.CENTER_Y);
            // this._titleLabel = new objects.Label("12 Parsecs Delivery", "50px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._titleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)
            createjs.Tween.get(this._titleLabel).wait(500).to({
                x: config.Screen.CENTER_X,
                y: config.Screen.CENTER_Y,
            }, 1500,
                createjs.Ease.backOut);
            this.addChild(this._titleLabel);

            // stamping effect for subtitle
            this._subtitleLabel = new objects.Label("Air Express!", "40px custfont", "#98D9FF", 10000, -10000)
            this._subtitleLabel.scaleX = this._subtitleLabel.scaleY = 500
            this._subtitleLabel.alpha = 0
            createjs.Tween.get(this._subtitleLabel).wait(2000).to({
                x: config.Screen.CENTER_X + 100,
                y: config.Screen.CENTER_Y - 50,
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 3000,
                createjs.Ease.circIn);
            // this._subtitleLabel = new objects.Label("Air Express!", "40px custfont", "#ddd", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y - 50)
            this._subtitleLabel.shadow = new createjs.Shadow('#000', 5, 5, 15)
            this._subtitleLabel.rotation = -7
            this.addChild(this._subtitleLabel)

            this._authorLabel = new objects.Label("Developed by: Kevin Ma (2016)", "20px custfont", "#fff", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50)
            this._authorLabel.shadow = new createjs.Shadow("#000", 2, 2, 2)
            this._authorLabel.alpha = 0.8

            // Add buttons to scene. Register for click callback function
            this._playgameBtn = new objects.Button("playgame", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 115);
            this._playgameBtn.shadow = new createjs.Shadow('#000', 5, 5, 15)
            this._playgameBtn.on("click", this._playgameBtnClick, this);

            this._instructionsBtn = new objects.Button("instructions", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 115);
            this._instructionsBtn.shadow = new createjs.Shadow('#000', 5, 5, 15)
            this._instructionsBtn.on("click", this._playgameBtnClick, this);

            //add to panel for animation purposes
            this._bottomPanel = new createjs.Container()
            this._bottomPanel.addChild(this._authorLabel)
            this._bottomPanel.addChild(this._playgameBtn);
            this._bottomPanel.addChild(this._instructionsBtn);
            // this._bottomPanel.y = 5000
            this._bottomPanel.alpha = 0

            createjs.Tween.get(this._bottomPanel).wait(2000).to({
                alpha: 1
            }, 2000, createjs.Ease.cubicIn)

            this.addChild(this._bottomPanel)

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        /**
         * This method runs when the Menu Scene updates
         * 
         * @public
         * @method update
         * 
         * @memberOf Menu
         * @return {void}
         */
        public update(): void {
            this._ocean.update()
        }

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
        private _playgameBtnClick(event: createjs.MouseEvent): void {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }

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
        private _instructionsBtnClick(event: createjs.MouseEvent): void {
            // Change global scene variable to GAME. Call global changeScene() function
            // scene = config.Scene.GAME;
            // changeScene();
        }
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */