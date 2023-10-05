import React from "react"
import { Link } from "react-router-dom"
import { SaldCard } from "../Components/SaldCard"

export function LunaDeMiel () {
    return (
        <div className="flex flex-col items-center">
            <main className="w-96 px-3 py-6 flex flex-col gap-10">
                <nav className='flex justify-between'>
                    <Link to='/home'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 6l-6 6l6 6" />
                        </svg>
                    </Link>

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                </nav>

                <header>
                    <h1 className="flex w-full justify-center font-medium text-xl text-red-600">Luna de Miel</h1>
                </header>

                <section>
                    <SaldCard value='$1.000'/>
                </section>
            </main>
        </div>
    )
}