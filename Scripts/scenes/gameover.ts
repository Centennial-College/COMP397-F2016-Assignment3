/**
 * @file gameover.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: This file is the gameover scene for the game.
 * @version 0.1.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class GameOver extends objects.Scene {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        private _bg: createjs.Bitmap;
        private _marioButton: objects.Button;

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
         * @memberOf Gameover
         * @return {void}
         */
        public start(): void {
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);

            this._marioButton = new objects.Button("Mario", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._marioButton);
            this._marioButton.on('click', this._marioClick, this);

            stage.addChild(this);
        }

        /**
         * This method runs when the scene needs to be updated
         * 
         * @public
         * @method update
         * 
         * @memberOf Gameover
         * @return {void}
         */
        public update(): void {

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is the event handler for the mario button click event.
         * 
         * @private
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf GameOver
         * @return {void}
         */
        private _marioClick(event: createjs.MouseEvent): void {
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */