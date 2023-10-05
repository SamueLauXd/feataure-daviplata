import React from "react";

export function Month({month, selected}) {
    
    const container = selected === true ? 'flex justify-center items-center px-4 py-2 bg-red-600 rounded-md shadow-lg'
    : 'flex justify-center items-center px-4 py-2 bg-white rounded-md shadow-lg'

    const text = selected === true ? 'text-md text-white'
    : 'text-md text-rose-700'

    return(
        <div className={container}>
            <p className={text}>{month}</p>
        </div>
    )
}