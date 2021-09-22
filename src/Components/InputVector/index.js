import React, { useContext } from 'react'
import { NeuralNetContext } from '../../Contexts/context'

export default function InputVector() {
    const [inputVector, setInputVector] = useContext(NeuralNetContext).inputVector;
    
    const updateInputVector = (index, value) => {
        let updatedInputVector = [];
        inputVector.forEach((e, i) => {
            console.log(e);
            if(index === i)
                updatedInputVector.push(value)
            else
                updatedInputVector.push(e)
        });        
        setInputVector(updatedInputVector)
    }

    return (
        <div>
            {
                inputVector.map((value, index) => {
                    return(
                        <div className="inputValue">
                            <p>X{index+1}</p>
                            <input 
                                type="number" 
                                value={value}
                                onChange={ e => updateInputVector(index, e.target.value) }/>
                        </div>
                    )
                })
            }
        </div>
    )
}
