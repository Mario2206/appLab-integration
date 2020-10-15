class Circle {
    /**
     * Canvas ref
    */
    private _canvas : HTMLCanvasElement;
    private _context : CanvasRenderingContext2D | null

    private _x : number
    private _y : number
    private _width : number
    private _lineWidth : number | undefined 
    private _dirX : number = 1 
    private _dirY : number = 1 
    private _speedX : number = 0
    private _speedY : number = 0

    private _color : string | CanvasGradient = "black" 

    constructor(canvas : HTMLCanvasElement, width : number,  x : number, y : number, ) {
        this._canvas = canvas
        this._context = canvas.getContext("2d")
        this._x = x
        this._y = y
        this._width = width
        this._dirX = Math.random() > 0.5 ? 1 : -1
        this._dirY = Math.random() > 0.5 ? 1 : -1
    }

    public set color(newColor : string | CanvasGradient) {
        this._color = newColor
    }   

    public set lineWidth (width : number) {
        this._lineWidth = width
    }

    public set speed ({speedX, speedY} : {speedX : number, speedY : number}) {
        this._speedX = speedX
            this._speedY = speedY
    }

    public draw() {

        if(!this._context) throw new Error("No context")

        this.defineDir()

        this._x += this._dirX * this._speedX
        this._y += this._dirY * this._speedY

        this._context.beginPath()
        this._context.arc(this._x, this._y,this._width,0, 2 * Math.PI, false)
        this._context.stroke()
        this._context.closePath()
        this._context.strokeStyle = this._color;
        this._context.lineWidth = this._lineWidth ?? this._width / 1.8


    }

    private defineDir() {
        if(this._x >= this._canvas.width || this._x <= 0) this._dirX = -this._dirX 
        if(this._y >= this._canvas.height || this._y <= 0) this._dirY = -this._dirY 

    }


}

export default Circle