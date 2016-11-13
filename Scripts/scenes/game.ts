/**
 * @file game.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 13 2016
 * @description: Game scene that contains all assets and functionality associated with the game itself
 * @version 0.2.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Game extends objects.Scene {

        // PRIVATE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        private _ocean: objects.Ocean;

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
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++

    }
}