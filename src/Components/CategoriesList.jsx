import React from "react"

export function CategoriesList ({title, destiny, value, icon}) {
    return (
        <div className="flex items-center justify-between bg-red-600 rounded-full w-full shadow-md">
            <div className="ml-5">
                {icon}
            </div>

            <div className="bg-white rounded-full w-10/12 p-4 flex items-center justify-between">
                <div>
                    <h1 className="font-semibold text-red-600">{title}</h1>
                    <h4 className="text-red-600">{destiny}</h4>
                </div>
                <h1 className="font-bold text-red-600">{value}</h1>
            </div>
        </div>
    )
}