import { createContext, useState } from "react";

export const NeuralNetContext = createContext();
export const NeuralNetContextProvider = props => {
    const [inputNodes, setInputNodes] = useState(3);
    const [outputNodes, setOutputNodes] = useState(3);

    return (
        <NeuralNetContext.Provider value={{inputNodes: [inputNodes, setInputNodes], outputNodes: [outputNodes, setOutputNodes]}}>
            {props.children}
        </NeuralNetContext.Provider>
    )
    
}