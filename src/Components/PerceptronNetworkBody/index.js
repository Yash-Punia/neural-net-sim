import React from 'react'
import { Canvas, InputLayer } from '..'
import './style.css'

export default function PerceptronNetworkBody() {
    
    const createLine = (ctx, x1, y1, x2, y2) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    
    const createNodes = (ctx, x1, y1, x2, y2, radius) => {
        ctx.fillStyle = '#FC5185';
        ctx.beginPath();
        ctx.arc(x1, y1, radius, 0, 2*Math.PI)
        ctx.arc(x2, y2, radius, 0, 2*Math.PI)
        ctx.fill();
    }

    const createConnections = (ctx, width, height) => {
        let inputNodes = 3;
        let outputNodes = 5;
        let layerGap = 500;
        let nodeGap = 150;
        let radius = 30;
        // let inputNodesGap = inputNodes%2 === 0 ? (inputNodes-1) * nodeGap/2 : nodeGap;
        // let outputNodesGap = outputNodes%2 === 0 ? (outputNodes-1) * nodeGap/2 : 2 * nodeGap;
        let inputNodesGap = (inputNodes-1) * nodeGap/2;
        let outputNodesGap = (outputNodes-1) * nodeGap/2;
        for(let i=0;i<inputNodes;i++)
        {
            for (let j = 0; j < outputNodes; j++) 
            {
                let x1 = -layerGap/2 + width/2;
                let y1 = -nodeGap*i + inputNodesGap + height/2;
                let x2 = layerGap/2 + width/2;
                let y2 = -nodeGap*j + outputNodesGap + height/2;
                createLine(ctx, x1, y1, x2, y2)
                createNodes(ctx, x1, y1, x2, y2, radius);
            }
        }
    }

    return (
        <div className="body">
            <InputLayer />
            <Canvas draw={createConnections}/>
        </div>
    )
}
