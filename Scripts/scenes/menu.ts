module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _menuButton : objects.Button;

        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            // Add button to scene
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);

            stage.addChild(this);
        }

        public update() : void {

        }

        private _startButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}