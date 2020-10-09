import  React, {useEffect} from 'react';
import Circle from '../../canvas/Circle';
import { getPercentageFromHeight, getPercentageFromWidth } from '../../helpers/percentage';

interface IEBackgroundCanvas {
    className : string, 
    width : number, 
    height : number
}

export default function BackgroundCanvas ({className, width, height} : IEBackgroundCanvas) {

    const canvasRef = React.createRef<HTMLCanvasElement>()

    function draw (circles : Array<Circle>, canvas : HTMLCanvasElement, ctx : CanvasRenderingContext2D) {
            
            ctx.clearRect(0,0,canvas.width, canvas.height)

            circles.forEach((circle : Circle) => circle.draw())

            requestAnimationFrame(()=>draw(circles,canvas, ctx));
        
    }
    
    useEffect(()=>{

         const canvas = canvasRef.current
         const ctx = canvas?.getContext("2d")

        if(!canvas || !ctx) return

         const circleWidth = getPercentageFromWidth(.7)
        
         const color1 = '#d4cdfd'
         const color2 = "red"

         const circle = new Circle(canvas, circleWidth,getPercentageFromWidth(10), getPercentageFromHeight(10))
         circle.color = color1
         circle.speed = {speedX  :.1, speedY :  .1 }

         const circle2 = new Circle(canvas, circleWidth, getPercentageFromWidth(20), getPercentageFromHeight(70))
         circle2.color = color2
         circle2.speed = {speedX  :.2, speedY :  .2 }

         const circle3 = new Circle(canvas, circleWidth, getPercentageFromWidth(80), getPercentageFromHeight(50))
         circle3.color = color1
         circle3.speed = {speedX  :.1, speedY :  .2 }

        requestAnimationFrame(()=>draw([circle, circle2,circle3],canvas, ctx))
        
    }, [width,height])

    return (
        <canvas ref={canvasRef} className={className} width={width} height={height} />
    )
}