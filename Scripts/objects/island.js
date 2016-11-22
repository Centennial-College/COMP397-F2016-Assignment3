var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file island.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 14 2016
 * @description: This is the Island object used in the game
 * @version 1.1.0 added combo system; refactored scoring system
 */
var objects;
(function (objects) {
    var Island = (function (_super) {
        __extends(Island, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Island(imageString) {
            _super.call(this, textureAtlas, imageString);
            this.start();
        }
        Object.defineProperty(Island.prototype, "hasBeenTouched", {
            // PROPERTIES
            get: function () {
                return this._hasBeenTouched;
            },
            set: function (newValue) {
                this._hasBeenTouched = newValue;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Island.prototype._reset = function () {
            this.y = -this.height;
            this.hasBeenTouched = false;
            // get a random x location
            // return Math.floor(Math.random() * (max - min + 1)) + min;
            // Returns a random integer between min (inclusive) and max (inclusive)
            this.x = Math.floor((Math.random() * ((640 - this.halfWidth) - this.halfWidth + 1)) + this.halfWidth);
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Island.prototype._checkBounds = function () {
            if (this.y >= (480 + (this.height * 0.5))) {
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Island.prototype.start = function () {
            this._reset();
            this._dy = 5; // 5px per frame down
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Island.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
            this._checkBounds();
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map