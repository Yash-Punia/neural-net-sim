import {React, useRef, useEffect} from 'react'



export default function Canvas( { draw } ) {
    
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')
        
        canvas.style.width = "100%"
        canvas.style.height = "90%"

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        draw(context, canvas.width, canvas.height)
        console.log(context.canvas.width + ':' + context.canvas.height);
    }, [draw])
    
    return (
        <canvas ref={canvasRef}/>
    )
}
