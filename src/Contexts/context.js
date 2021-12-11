import { createContext, useState } from "react";

export const NeuralNetContext = createContext();

export const NeuralNetContextProvider = props => {
    const [inputVector, setInputVector] = useState([1,1]);
    const [outputVector, setOutputVector] = useState([1]);
    const [targetVector, setTargetVector] = useState([1]);
    const [learningRate, setLearningRate] = useState(1)
    const [weights, setWeights] = useState(new Array(inputVector.length).fill(0).map(() => new Array(outputVector.length).fill(0)));

    return (
        <NeuralNetContext.Provider value={
            {
                inputVector: [inputVector, setInputVector], 
                outputVector: [outputVector, setOutputVector],
                targetVector: [targetVector, setTargetVector],
                learningRate: [learningRate, setLearningRate],
                weights: [weights, setWeights]
            }
        }>
            {props.children}
        </NeuralNetContext.Provider>
    )
    
}