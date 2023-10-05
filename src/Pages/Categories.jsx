import React from "react";
import { Link } from "react-router-dom";
import { Month } from "../Components/Month";
import { CategoriesList } from "../Components/CategoriesList";

export function Categories() {
    return(
        <div className="flex flex-col items-center">
            <img src="/bg.jpg" className="-z-10 absolute inset-y-0"/>
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

                <section className='flex flex-col items-center gap-2'>
                    <h2 className='font-bold text-l'>Saldo Actual</h2>
                    <h1 className='font-bold text-4xl'>$531.695</h1>
                </section>

                <section className="flex items-center justify-center gap-4">
                    <Month month='Jun' selected={true}/>
                    <Month month='Jul'/>
                    <Month month='Ago'/>
                    <Month month='Sep'/>
                    <Month month='Oct'/>
                </section>

                <section className="flex flex-col gap-5">
                    <h1 className="font-bold text-xl">Categorias</h1>
                    <CategoriesList title='Alimentacion' 
                        destiny='Bolsillo Familiar' 
                        value='$800.000'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cup" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 11h14v-3h-14z" />
                            <path d="M17.5 11l-1.5 10h-8l-1.5 -10" />
                            <path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
                            <path d="M15 5v-2" />
                            </svg>}
                    />
                    <CategoriesList title='Entretenimiento' 
                        destiny='Mi Cuenta' 
                        value='$50.000'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple-arcade" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" />
                        <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z" />
                        <path d="M12 7l0 6" />
                        </svg>}
                    />
                    <CategoriesList title='Transporte' 
                        destiny='Mi Cuenta' 
                        value='$100.000'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-car" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                        </svg>}
                    />
                    <CategoriesList title='Educación' 
                        destiny='Bolsillo Familiar' 
                        value='$120.000'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backpack" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" />
                        <path d="M10 6v-1a2 2 0 1 1 4 0v1" />
                        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                        <path d="M11 10h2" />
                        </svg>}
                    />
                </section>
            </main>
        </div>
    )
}