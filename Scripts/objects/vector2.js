var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file vector2.ts
 * @author Kevin Ma
 * @studentID 300867968
 * @date: Nov 13 2016
 * @description: This class extends the CreateJS Point class
 * @version 0.3.0
 */
var objects;
(function (objects) {
    var Vector2 = (function (_super) {
        __extends(Vector2, _super);
        function Vector2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            _super.call(this, x, y);
        }
        /**
         * This method returns the distance between two Vector2 objects (a and b)
         *
         * @static
         * @method distance
         * @param {Vector2} a
         * @param {Vector2} b
         * @returns {number}
         */
        Vector2.distance = function (a, b) {
            return Math.floor(Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)));
        };
        return Vector2;
    }(createjs.Point));
    objects.Vector2 = Vector2;
})(objects || (objects = {}));
//# sourceMappingURL=vector2.js.map