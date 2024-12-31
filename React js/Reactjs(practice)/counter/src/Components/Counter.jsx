import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {

    const [time, setTime] = useState(0)
    const [isRun, setIsRun] = useState(false)
    const [dark, setdark] = useState(true)

    useEffect(() => {
        if (isRun && time > 0) {
            setdark(false);
            let timeid = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000);
            return () => clearInterval(timeid)
        }

        else if (time === 0) {
            setdark(true);
            setIsRun(false)
        }
    }, [time, isRun])

    const handleInput = (e) => {
        const value = parseInt(e.target.value, 10)
        if (!isNaN(value) && value >= 0) { setTime(value * 60) }
    }


    const formattime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }


    return (
        <>
            <h1 className='heading'>This is React Counter App</h1>
            <div className={` bg-black-500  ${dark ? 'bg-gray-700 text-green' : 'bg-white text-gray-800'}`}>



                <div className='max-w-xl m-auto p-20 px-30 h-full w-full'>

                    <div className='border-2 w-30 p-10 mt-0'>

                        <input type="number" placeholder='setTime in Minutes' className=' border-2 p-2 w-full text-black text-center outline-offset-8' onChange={handleInput} disabled={isRun} />

                        <div className='mt-4 text-center'>
                            <button className='btn bg-lime-700' onClick={() => setIsRun(true)} disabled={isRun}>Start</button>
                            <button className='btn bg-orange-400' onClick={() => setIsRun(false)}>Pause</button>
                            <button className='btn' onClick={() => setTime(0)}>Reset</button>
                        </div>
                        <h2 className='heading text-sm p-2'>{time > 0 ? formattime(time) : 'time up'}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter


