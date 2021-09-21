import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { NeuralNetContext } from '../../Contexts/context'
import './style.css'

export default function Sidebar() {
    const [inputNodes, setInputNodes] = useContext(NeuralNetContext).inputNodes;
    const [outputNodes, setOutputNodes] = useContext(NeuralNetContext).outputNodes;

    const updateInputNodes = nodes => {
        setInputNodes(inputNodes + nodes)
    }

    const updateOutputNodes = nodes => {
        setOutputNodes(outputNodes + nodes)
    }

    return (
        <div className="sidebar">
            <div className="sidebar__field">
                <p>Input Nodes</p>

                <div className="sidebar__fieldButtons">
                    {inputNodes > 1 ? <div onClick={() => { updateInputNodes(-1) }} className="sidebar__minusButton"><FaMinus /></div> : <></>}
                    {inputNodes}
                    {inputNodes < 6 ? <div onClick={() => { updateInputNodes(1) }} className="sidebar__plusButton"><FaPlus /></div> : <></>}
                </div>

            </div>
            <div className="sidebar__field">
                <p>Output Nodes</p>

                <div className="sidebar__fieldButtons">
                    {outputNodes > 1 ? <div onClick={() => { updateOutputNodes(-1) }} className="sidebar__minusButton"><FaMinus /></div> : <></>}
                    {outputNodes}
                    {outputNodes < 6 ? <div onClick={() => { updateOutputNodes(1) }} className="sidebar__plusButton"><FaPlus /></div> : <></>}
                </div>
            </div>
            <div className="sidebar__field">
                <h3>Input Vector</h3>
            </div>
            <div className="sidebar__field">
                <h3>Target Vector</h3>
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
