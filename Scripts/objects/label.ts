module objects {
    export class Label extends createjs.Text {
        constructor(labelString: string, labelFont: string, labelColor: string, x: number, y: number) {
            super(labelString, labelFont, labelColor);
            this.x = x;
            this.y = y;
        }
    }
}