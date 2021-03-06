/**
 * @file gameobject.ts
 * @author Kevin Ma 
 * @studentID 300867968
 * @date: Nov 14 2016
 * @description: This class represents a generic Game Object used in the game
 * @version 0.5.0 added objects/gameobject, objects/vector2 and objects/island classes
 */
module objects {
    export abstract class GameObject extends createjs.Sprite {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _width: number;
        private _height: number;
        private _name: string;
        private _position: Vector2;
        private _isColliding: boolean;
        public sound: createjs.AbstractSoundInstance;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++

        get width(): number {
            return this._width;
        }

        set width(newWidth: number) {
            this._width = newWidth;
        }

        get halfWidth(): number {
            return this._width * 0.5;
        }

        get height(): number {
            return this._height;
        }

        set height(newHeight: number) {
            this._height = newHeight;
        }

        get halfHeight(): number {
            return this._height * 0.5;
        }

        get name(): string {
            return this._name;
        }

        set name(newName: string) {
            this._name = newName;
        }

        get position(): Vector2 {
            return this._position;
        }

        set position(newPosition: Vector2) {
            this._position = newPosition;
        }

        get isColliding(): boolean {
            return this._isColliding;
        }

        set isColliding(newState: boolean) {
            this._isColliding = newState;
        }

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of the GameObject.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(atlas: createjs.SpriteSheet, imageString: string, public deathAnimString?: string) {
            super(atlas, imageString);

            this._initialize(imageString);
            this.start();
        }

        private _initialize(imageString: string): void {
            this.name = imageString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.position = new Vector2(this.x, this.y);
            this.isColliding = false;
        }

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start(): void {

        }

        /**
        * This method updates the object's properties
        * every time it's called
        * 
        * @public 
        * @method update
        * @returns {void}
        */
        public update(): void {


        }


    }
}