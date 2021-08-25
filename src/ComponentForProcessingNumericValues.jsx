import React, {useState} from 'react';
import './ComponentForProcessingNumericValues.css';
import {
    billionProcessing,
    dozensProcessing,
    hundredsOfbillionsProcessing,
    hundredsOfmillionsProcessing,
    hundredsOfquadrillionProcessing,
    hundredsOfThousandsProcessing,
    hundredsOftrillionsProcessing,
    hundredsProcessing,
    millionsProcessing,
    quadrillionProcessing, SimpleValue,
    tensOfbillionProcessing,
    tensOfmillionsProcessing,
    tensOfquadrillionsProcessing,
    tensOfThousandsProcessing,
    tensOftrillionsProcessing,
    thousandsProcessing, translate,
    trillionProcessing,
    unitProcessing
} from "./customValue";

export function ComponentForProcessingNumericValues() {

    let [typeValue, setTypeValue] = useState('')
    let [error, setError] = useState("")
    let [figureInWords, setFigureInWords] = useState("")

    const onChangeHandler = (e) => {
        const newValue = e.currentTarget.value
        setTypeValue(newValue)
    }
    const onClickHandler = () => {

       const Words = translate(typeValue)
        setError(null)
        setFigureInWords(Words)


        if (typeValue.length > 18) {
            setError('Пожалуйста, введите число, содержащее не более 18 символов (квадриллион).')
        }
        if (typeValue.includes('-')) {
            setError('Пожалуйста, введите целое, натуральное, положительное число.')
        }
        if (typeValue.includes('.')) {
            setError('Пожалуйста, введите целое, натуральное, положительное число.')
        }
        if (typeValue.includes(',')) {
            setError('Пожалуйста, введите целое, натуральное, положительное число.')
        }
        if (!Number(typeValue)) {
            setError('Пожалуйста, введите целое, натуральное, положительное число.')
        }
    }

    const onKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            onClickHandler()
        }
    }

    return (
        <header className="container">
            <div className= 'error'>{error && <div>{error}</div>}</div>
                <input  value={typeValue}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className="inputType"
                       placeholder= "Ведите цифру"
                />
            <button onClick={onClickHandler} className="buttonType">Результат</button>
            <div>
                {!error && <span className="resultType">Результат: {figureInWords}</span>}
            </div>
        </header>

    )
}


