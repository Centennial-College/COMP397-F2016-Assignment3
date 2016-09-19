var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            // Add label to scene
            // menuLabel = new objects.Label("Pong HD Remix: The Movie The Game", "Arial 16px", "#000000", )
            // Add button to scene
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype._startButtonClick = function (event) {
            scene = config.Scene.GAME;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map