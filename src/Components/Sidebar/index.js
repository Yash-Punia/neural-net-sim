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
    }

    return (
        <div className="sidebar">
            <div className="sidebar__field">
                <p>Input Nodes</p>

                <div className="sidebar__fieldButtons">
                    {inputVector.length > 1 ? <div onClick={() => { updateInputNodes(-1) }} className="sidebar__minusButton"><FaMinus /></div> : <></>}
                    {inputVector.length}
                    {inputVector.length < 6 ? <div onClick={() => { updateInputNodes(1) }} className="sidebar__plusButton"><FaPlus /></div> : <></>}
                </div>

            </div>
            <div className="sidebar__field">
                <p>Output Nodes</p>

                <div className="sidebar__fieldButtons">
                    {outputVector.length > 1 ? <div onClick={() => { updateOutputNodes(-1) }} className="sidebar__minusButton"><FaMinus /></div> : <></>}
                    {outputVector.length}
                    {outputVector.length < 6 ? <div onClick={() => { updateOutputNodes(1) }} className="sidebar__plusButton"><FaPlus /></div> : <></>}
                </div>
            </div>
            <div className="sidebar__field">
                <h3>Input Vector</h3>
                <InputVector/>
            </div>
            <div className="sidebar__field">
                <h3>Target Vector</h3>
                <TargetVector/>
            </div>
            <div className="sidebar__field">
                <h3>Learning Rule</h3>
            </div>
            <div className="sidebar__field">
                <select>
                    <option>Hebbian Learning Rule</option>
                </select>
            </div>
        </div>
    )
}
