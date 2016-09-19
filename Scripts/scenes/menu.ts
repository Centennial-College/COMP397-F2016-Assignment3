module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _menuLabel : objects.Label;
        private _menuButton : objects.Button;

        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            // Add label to scene
            // menuLabel = new objects.Label("Pong HD Remix: The Movie The Game", "Arial 16px", "#000000", )

            // Add button to scene
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);
        }

        public update() : void {
            
        }

        private _startButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}