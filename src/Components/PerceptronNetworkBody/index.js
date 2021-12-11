import React, { useContext } from 'react'
import { NeuralNetContext } from '../../Contexts/context';
import { Canvas } from '..'
import './style.css'

export default function PerceptronNetworkBody() {
    const [inputVector,] = useContext(NeuralNetContext).inputVector;
    const [outputVector,] = useContext(NeuralNetContext).outputVector;
    const [targetVector, ] = useContext(NeuralNetContext).targetVector;

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

    const createTargetNodes = (ctx, x1, y1, value, radius) => {
        ctx.fillStyle = '#3FC1C9';
        ctx.beginPath();
        ctx.font = "24px Arial"
        ctx.arc(x1, y1, radius, 0, 2 * Math.PI)
        ctx.fill();
        ctx.fillStyle = '#000000';
        ctx.fillText(value, x1 - 12, y1 - 40);
    }

    const updateInputTextValues = (ctx, x1, y1, i) => {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "30px Arial"
        ctx.fillText(inputVector[i], x1 - 8, y1 + 8);
    }

    const updateOutputTextValues = (ctx, x1, y1, i) => {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "30px Arial"
        ctx.fillText(outputVector[i], x1 - 8, y1 + 8);
    }

    const updateTargetTextValues = (ctx, x1, y1, i) => {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "30px Arial"
        ctx.fillText(targetVector[i], x1 - 8, y1 + 8);
    }

    const createNetwork = (ctx, width, height) => {
        let inputNodes = inputVector.length;
        let outputNodes = outputVector.length;
        let layerGap = 500;
        let nodeGap = inputNodes > outputNodes ? height / inputNodes : height / outputNodes;
        let radius = 30;
        let inputNodesGap = (height - (inputNodes - 1) * nodeGap)/2;
        let outputNodesGap = (height - (outputNodes - 1) * nodeGap)/2;
        let yOffset = ((inputNodes-1) * nodeGap - (outputNodes-1) * nodeGap)/2;
        let x1 = -layerGap / 2 + width / 2;
        let x2 = layerGap / 2 + width / 2;
        let x3 = x2 + layerGap / 2;
        for (let i = 0; i < inputNodes; i++) {
            for (let j = 0; j < outputNodes; j++) {
                let y1 = nodeGap * i + Math.max(0, -yOffset) +30 + Math.min(inputNodesGap, outputNodesGap);
                let y2 = nodeGap  * j + Math.max(0, yOffset) + 30 + Math.min(inputNodesGap, outputNodesGap);
                createLine(ctx, x1, y1, x2, y2)
                createNodes(ctx, x1, y1, 'X' + (i + 1), x2, y2, 'Y' + (j + 1), radius);
                createTargetNodes(ctx, x3, y2, 'T' + (j+1), radius);    
                updateInputTextValues(ctx, x1, y1, i);
                updateOutputTextValues(ctx, x2, y2, j);
                updateTargetTextValues(ctx, x3, y2, j);
            }
        }
    }

    return (
        <div className="body">
            <Canvas draw={createNetwork} />
        </div>
    )
}
