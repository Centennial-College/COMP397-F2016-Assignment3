module scenes {
    export class Game extends objects.Scene {

        // PRIVATE VARIABLES
        private gameLabel : objects.Label;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");
        }

        public update() : void {
            // Update objects
        }
    }
}