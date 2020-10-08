import  React, {useEffect} from 'react';
import { getPercentageFromHeight, getPercentageFromWidth } from '../../helpers/percentage';

interface IEBackgroundCanvas {
    className : string, 
    width : number, 
    height : number
}

export default function BackgroundCanvas ({className, width, height} : IEBackgroundCanvas) {

    const canvasRef = React.createRef<HTMLCanvasElement>()
    console.log(width);
    
    useEffect(()=>{
        
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")

        if(ctx) {

            const width = getPercentageFromWidth(100)
            const height = getPercentageFromHeight(7)
            console.log(height);
            
            ctx.scale(1, 1)
            ctx.fillStyle = 'red';
            ctx.fillRect(10,10,width,height)
        }

        
    }, [width,height])

    return (
        <canvas ref={canvasRef} className={className} width={width} height={height}/>
    )
}