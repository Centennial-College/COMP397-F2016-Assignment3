/**
 * @file game.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 14 2016
 * @description: Game scene that contains all assets and functionality associated with the game itself
 * @version 0.6.0 added objects/player class
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Game extends objects.Scene {

        // PRIVATE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        private _ocean: objects.Ocean;
        private _island: objects.Island
        private _player: objects.Player

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
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

            // ocean object
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);

            // island object
            this._island = new objects.Island("island");
            this.addChild(this._island);

            // player object 
            this._player = new objects.Player("plane");
            this.addChild(this._player);

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
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}