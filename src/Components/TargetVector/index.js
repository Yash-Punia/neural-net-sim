import React, { useContext } from 'react'
import { NeuralNetContext } from '../../Contexts/context'

export default function TargetVector() {
    const [targetVector, setTargetVector] = useContext(NeuralNetContext).targetVector;
    
    const updateTargetVector = (index, value) => {
        let updatedTargetVector = [];
        targetVector.forEach((e, i) => {
            console.log(e);
            if(index === i)
                updatedTargetVector.push(value)
            else
                updatedTargetVector.push(e)
        });        
        setTargetVector(updatedTargetVector)
    }

    return (
        <div>
            {
                targetVector.map((value, index) => {
                    return(
                        <div className="targetValue">
                            <p>X{index+1}</p>
                            <input 
                                type="number" 
                                value={value}
                                onChange={ e => updateTargetVector(index, e.target.value) }/>
                        </div>
                    )
                })
            }
        </div>
    )
}
