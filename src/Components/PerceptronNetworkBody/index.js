import React, { useContext } from 'react'
import { NeuralNetContext } from '../../Contexts/context';
import { Canvas } from '..'
import './style.css'

export default function PerceptronNetworkBody() {
    const [inputVector,] = useContext(NeuralNetContext).inputVector;
    const [outputVector,] = useContext(NeuralNetContext).outputVector;

    const createLine = (ctx, x1, y1, x2, y2) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    const createNodes = (ctx, x1, y1, name1, x2, y2, name2, radius) => {
        ctx.fillStyle = '#FC5185';
        ctx.beginPath();
        ctx.font = "24px Arial"
        ctx.arc(x1, y1, radius, 0, 2 * Math.PI)
        ctx.arc(x2, y2, radius, 0, 2 * Math.PI)
        ctx.fill();
        ctx.fillStyle = '#000000';
        ctx.fillText(name1, x1 - 12, y1 - 40);
        ctx.fillText(name2, x2 - 12, y2 - 40);
    }

    const updateInputNodeValues = (ctx, x1, y1, i) => {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "30px Arial"
        ctx.fillText(inputVector[i], x1 - 8, y1 + 8);
    }

    const createNetwork = (ctx, width, height) => {
        let inputNodes = inputVector.length;
        let outputNodes = outputVector.length;
        let layerGap = 500;
        let nodeGap = inputNodes > outputNodes ? height / inputNodes : height / outputNodes;
        let radius = 30;
        let inputNodesGap = (inputNodes - 1) * nodeGap / 2;
        let outputNodesGap = (outputNodes - 1) * nodeGap / 2;
        let yOffset = 0;
        let x1 = -layerGap / 2 + width / 2;
        let x2 = layerGap / 2 + width / 2;
        for (let i = 0; i < inputNodes; i++) {
            for (let j = 0; j < outputNodes; j++) {
                let y1 = -nodeGap * i  + inputNodesGap  + height/2;
                let y2 = -nodeGap  * j + outputNodesGap + height/2;
                createLine(ctx, x1, y1, x2, y2)
                createNodes(ctx, x1, y1, 'X' + (i + 1), x2, y2, 'Y' + (j + 1), radius);
                updateInputNodeValues(ctx, x1, y1, i);
            }
        }
    }

    return (
        <div className="body">
            <Canvas draw={createNetwork} />
        </div>
    )
}
