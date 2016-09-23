/**
 * @file scene.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: Scene class extends a container object used to store object associated with a particular scene.
 * @version 0.1.0
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var objects;
(function (objects) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Scene() {
            _super.call(this);
            this.start();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * When this object starts, add it to the current global stage container.
         *
         * @public
         * @method start
         *
         * @memberOf Scene
         * @return {void}
         */
        Scene.prototype.start = function () {
            stage.addChild(this);
        };
        /**
         * When this object updates, this method is run
         *
         * @public
         * @method update
         *
         * @memberOf Scene
         * @return {void}
         */
        Scene.prototype.update = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=scene.js.map