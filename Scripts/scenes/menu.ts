/**
 * @file menu.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 13 2016
 * @description: This file contains all assets and functionality associated with the menu itself.
 * @version 0.1.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Menu extends objects.Scene {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        private _playgameBtn: objects.Button;
        private _instructionsBtn: objects.Button;
        private _titleLabel: objects.Label;
        private _subtitleLabel: objects.Label

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

            this._titleLabel = new objects.Label("12 Parsecs Delivery", "40px custfont", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._titleLabel);

            this._subtitleLabel = new objects.Label("Air Express!", "20px custfont", "00008b", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 50)
            this.addChild(this._subtitleLabel)

            // Add buttons to scene. Register for click callback function
            this._playgameBtn = new objects.Button("playgame", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 100);
            this.addChild(this._playgameBtn);
            this._playgameBtn.on("click", this._playgameBtnClick, this);

            this._instructionsBtn = new objects.Button("instructions", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 100);
            this.addChild(this._instructionsBtn);
            this._playgameBtn.on("click", this._playgameBtnClick, this);

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