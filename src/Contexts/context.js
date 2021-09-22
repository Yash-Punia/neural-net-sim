import { createContext, useState } from "react";

export const NeuralNetContext = createContext();
export const NeuralNetContextProvider = props => {
    const [inputVector, setInputVector] = useState([0,0,0]);
    const [outputVector, setOutputVector] = useState([0,0,0]);
    const [targetVector, setTargetVector] = useState([0,0,0]);

    return (
        <NeuralNetContext.Provider value={
            {
                inputVector: [inputVector, setInputVector], 
                outputVector: [outputVector, setOutputVector],
                targetVector: [targetVector, setTargetVector]
            }
        }>
            {props.children}
        </NeuralNetContext.Provider>
    )
    
}