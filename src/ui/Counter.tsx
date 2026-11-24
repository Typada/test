import {useEffect, useState} from "react";

// ui
export function Counter() {

    const {count, handleClick, dec, reset, setStepFive} = useCounter(0, 1, 3);

    const handleChangeStep = () => {
        alert("Set new step value --- 5")
        setStepFive()
    }

    return (
        <>
            ⏰ Автосброс через 3 сек
            <h1>
                {count}
            </h1>
            <button onClick={handleClick}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleChangeStep}>
                Set step to 5
            </button>
        </>
    )
}

//bll/state management

const useCounter = (defaultCount: number = 0, startStep: number = 1, autoResetTime: number = 0) => {
    const [count, setCount] = useState(defaultCount);
    const [step, setStep] = useState(startStep)
    if (autoResetTime !== null && autoResetTime > 0) {
        autoResetTime = autoResetTime * 1000
    }

    const handleClick = () => {
        setCount(count + step);
    }

    const dec = () => {
        setCount(count - step);
    }

    const reset = () => {
        setCount(defaultCount);
    }

    const setStepFive = () => {
        setStep(5)
    }

    useEffect(() => {
        if (autoResetTime && autoResetTime > 0) {
            setInterval(() => {
                setCount(defaultCount);
            }, autoResetTime)
        }
    }, []);

    return {
        count,
        handleClick,
        dec,
        reset,
        setStepFive
    }
}