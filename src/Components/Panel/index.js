import { React, useContext } from 'react'
import { NeuralNetContext } from '../../Contexts/context'

export default function Panel() {
    const [inputVector, setInputVector] = useContext(NeuralNetContext).inputVector;
    const [outputVector, setOutputVector] = useContext(NeuralNetContext).outputVector;
    const [targetVector, setTargetVector] = useContext(NeuralNetContext).targetVector;
    const [learningRate,] = useContext(NeuralNetContext).learningRate;
    const [weights, setWeights] = useContext(NeuralNetContext).weights;

    // const fn = neti => {
    //     return 1 / (1 + Math.exp(-neti));
    // }

    // const Fn = neti => {
    //     return (fn(neti) * (1-fn(neti)));
    // }

    const nextStep = () => {
        let activationVector = [];
        // calculate output
        outputVector.forEach((output, i) => {
            let activation = 0;
            inputVector.forEach((input, j) => {
                activation += input * weights[j][i];
            })

            if(activation >= 0)
                outputVector[i] = 1;
            else
                outputVector[i] = -1;
            // activationVector.push(activation);
        });

        setOutputVector([...outputVector]);

        // update weights
        for (let i = 0; i < inputVector.length; i++) {
            for (let j = 0; j < outputVector.length; j++) {
                weights[i][j] = weights[i][j] + learningRate * outputVector[j] * inputVector[i];
            }
        }
        setWeights([...weights]);
    }

    return (
        <div className='bg-white p-4'>
            <h1 className='text-xl'>Weights</h1>
            {weights.map((row, i) => {
                return row.map((col, j) => {
                    return (
                        <p>W{i + 1}{j + 1}: {col}</p>
                    )
                })
            })}
            <div onClick={nextStep} className='bg-secondary w-max px-4 py-2 text-light rounded-xl cursor-pointer my-4 hover:shadow-lg'>
                Next Step
            </div>
        </div>
    )
}
