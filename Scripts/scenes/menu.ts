/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: This file contains all assets and functionality associated with the menu itself.
 * @version 0.1.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Menu extends objects.Scene {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        private _menuButton: objects.Button;
        private _menuButtonGameOver: objects.Button;
        private _menuLabel: objects.Label;

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
        private _startButtonClick(event: createjs.MouseEvent): void {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }

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
        private _gameOverButtonClick(event: createjs.MouseEvent): void {
            scene = config.Scene.GAMEOVER;
            changeScene();
        }
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */