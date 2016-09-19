module objects {
    export class Label extends createjs.Text {
        constructor(labelString: string, labelFont: string, labelColor: string, x: number, y: number) {
            super(labelString, labelFont, labelColor);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
        }
    }
}