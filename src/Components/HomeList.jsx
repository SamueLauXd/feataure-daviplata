import React from "react";

export function HomeList({value, name, date, svg}) {
    return(
        <div className="flex justify-between w-full">
            <div className="flex gap-2">
                <div className='p-2 rounded-lg bg-red-600'>
                    {svg}
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-m">{name}</h1>
                    <p className="text-xs">{date}</p>
                </div>
            </div>

            <h3>{value}</h3>
        </div>
    )
}