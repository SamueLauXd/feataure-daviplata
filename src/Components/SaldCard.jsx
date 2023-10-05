import React from "react";

export function SaldCard ({value}) {
    return (
        <div className="w-full rounded-lg shadow-lg p-3">
            <div className="w-full flex items-center justify-start gap-3">
                <div className='p-2 rounded-lg bg-red-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                    </svg>
                </div>
                <p>Saldo Actual</p>
            </div>
            <div className="w-full flex justify-end">
                <h1 className="font-medium text-xl">{`$${value}`}</h1>
            </div>
        </div>
    )
}