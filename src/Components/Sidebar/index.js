import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { TargetVector } from '..';
import { NeuralNetContext } from '../../Contexts/context'
import InputVector from '../InputVector';
import './style.css'

export default function Sidebar() {
    const [inputVector, setInputVector] = useContext(NeuralNetContext).inputVector;
    const [outputVector, setOutputVector] = useContext(NeuralNetContext).outputVector;
    const [targetVector, setTargetVector] = useContext(NeuralNetContext).targetVector;
    const [learningRate, setLearningRate] = useContext(NeuralNetContext).learningRate;
    const [weights, setWeights] = useContext(NeuralNetContext).weights;

    const updateInputNodes = nodes => {
        if(nodes === 1)
        {
            let newInputVector = [...inputVector, 0];
            setInputVector(newInputVector)
        }
        else
        {
            let newInputVector = inputVector.filter( (e, i) => i < inputVector.length - 1);
            setInputVector(newInputVector);
        }
        setWeights(new Array(inputVector.length).fill(0).map(() => new Array(outputVector.length).fill(0)));
    }

    const updateOutputNodes = nodes => {
        if(nodes === 1)
        {
            let newOutputVector = [...outputVector, 0];
            let newTargetVector = [...targetVector, 0]
            setOutputVector(newOutputVector)
            setTargetVector(newTargetVector)
        }
        else
        {
            let newOutputVector = outputVector.filter( (e, i) => i < outputVector.length - 1);
            let newTargetVector = targetVector.filter( (e, i) => i < targetVector.length - 1);
            setOutputVector(newOutputVector);
            setTargetVector(newTargetVector);
        }
        setWeights(new Array(inputVector.length).fill(0).map(() => new Array(outputVector.length).fill(0)));
    }

    return (
        <div className="sidebar bg-white flex flex-col p-2">
            <div className="flex justify-between m-2">
                <p>Input Nodes</p>

                <div className="flex">
                    {inputVector.length > 1 ? <div onClick={() => { updateInputNodes(-1) }} className="grid place-items-center cursor-pointer m-2"><FaMinus /></div> : <></>}
                    {inputVector.length}
                    {inputVector.length < 6 ? <div onClick={() => { updateInputNodes(1) }} className="grid place-items-center cursor-pointer m-2"><FaPlus /></div> : <></>}
                </div>

            </div>
            <div className="flex justify-between m-2">
                <p>Output Nodes</p>

                <div className="flex">
                    {outputVector.length > 1 ? <div onClick={() => { updateOutputNodes(-1) }} className="grid place-items-center cursor-pointer m-2"><FaMinus /></div> : <></>}
                    {outputVector.length}
                    {outputVector.length < 6 ? <div onClick={() => { updateOutputNodes(1) }} className="grid place-items-center cursor-pointer m-2"><FaPlus /></div> : <></>}
                </div>
            </div>
            <div className="flex justify-between m-2 flex-col">
                <h3> Learning Rate </h3>
                <input className="learningRateInput" type="number" value={learningRate} onChange={e=>setLearningRate(e.target.value)}/>
            </div>
            <div className="flex justify-between m-2 flex-col">
                <h3>Input Vector</h3>
                <InputVector/>
            </div>
            <div className="flex justify-between m-2 flex-col">
                <h3>Target Vector</h3>
                <TargetVector/>
            </div>
            <div className="flex justify-between m-2 flex-col">
                <h3>Learning Rule</h3>
                <select>
                    <option>Hebbian Learning Rule</option>
                </select>
            </div>
            <div className="flex justify-between m-2 flex-col">
                <h3>Activation Function</h3>
                <select>
                    <option>Identity</option>
                    <option>Binary Sigmoid</option>
                    <option>Bipolar Sigmoid</option>
                </select>
            </div>

        </div>
    )
}
