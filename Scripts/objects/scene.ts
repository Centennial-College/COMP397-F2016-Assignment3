/**
 * @file scene.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: Scene class extends a container object used to store object associated with a particular scene.
 * @version 0.1.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module objects {
    export class Scene extends createjs.Container {

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
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
        public start() : void {
            stage.addChild(this);
        }

        /**
         * When this object updates, this method is run
         * 
         * @public
         * @method update
         * 
         * @memberOf Scene
         * @return {void}
         */
        public update() : void {
            
        }
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */