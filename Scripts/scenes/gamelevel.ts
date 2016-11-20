/**
 * @file gamelevel.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 20 2016
 * @description: GameLevel scene that contains all assets and functionality associated with the game itself
 * @version 0.11.0 added cloud, added cloud collision sound
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export abstract class GameLevel extends objects.Scene {

        // INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        protected _ocean: objects.Ocean;
        protected _island: objects.Island
        protected _player: objects.Player
        protected _gameOver: boolean
        protected _bgMusic: createjs.AbstractSoundInstance

        // top UI bar
        protected _uiBar: objects.UIBar

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super()
            this._gameOver = false
        }

        // PUBLIC FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function creates the game objects and adds them to the stage
         * 
         * @public
         * @method start
         * 
         * @memberOf Game
         * @return {void}
         */
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");

            // hides cursor when game scene starts
            stage.cursor = 'none'

            this.addChild(this._ocean = new objects.Ocean("ocean"));
            this.addChild(this._island = new objects.Island("island"))
            this.addChild(this._player = new objects.Player("plane"));
            this.addChild(this._uiBar = new objects.UIBar())
            // this._uiBar.shadow = new createjs.Shadow('#000', 1, 1, 20)

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        /**
         * This function updates the objects contained in the game scene
         * 
         * @public
         * @method update
         * 
         * @memberOf Game
         * @return {void}
         */
        public update(): void {
            // Update objects
            this._ocean.update()
            this._island.update()
            this._player.update()
            this._uiBar.update()

            if (gameTime <= 0) {
                createjs.Sound.stop()
                this._gameOver = true
            }

            // check for collisions
            this._player.checkCollision(this._island)

        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}