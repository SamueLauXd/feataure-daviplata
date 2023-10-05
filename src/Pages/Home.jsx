import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeList } from '../Components/HomeList';
import { FormDialog } from '../Components/FormDialog';
import { Pockets } from '../Components/Pockets';

export function Home() {

    const [pocket, setPocket] = useState([])
    const hasPockets = pocket.length > 0

    const createPocket = ({name, mount, quota}) => {
        const newPocket = {
            name,
            mount,
            quota,
            id: crypto.randomUUID()
        }
        setPocket(prevstate => [...prevstate, newPocket])
    }

    useEffect(() => {
        console.log(pocket)
    },[pocket])

return (
    <div className="flex flex-col items-center">
        <img loading='lazy' src="/bg2.png" className="-z-10 absolute inset-y-0"/>
        <main className="w-96 px-3 py-6 flex flex-col gap-10">
            <nav className='flex justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
            </nav>

            <section className='flex flex-col items-center text-white gap-2'>
                <h2 className='font-bold text-l'>Saldo Actual</h2>
                <h1 className='font-bold text-4xl'>$531.695</h1>
            </section>

            <section className='flex justify-center gap-8 text-white text-xs'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='p-2 rounded-lg bg-red-700'>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8.15001L20.6125 4.61251C25.375 3.02501 27.9625 5.62501 26.3875 10.3875L22.85 21C20.475 28.1375 16.575 28.1375 14.2 21L13.15 17.85L10 16.8C2.86251 14.425 2.86251 10.5375 10 8.15001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.3875 17.3125L17.8625 12.825" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </div>
                    <p>Enviar</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='p-2 rounded-lg bg-red-700'>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.875 11.8125H2.5C1.9875 11.8125 1.5625 11.3875 1.5625 10.875C1.5625 10.3625 1.9875 9.9375 2.5 9.9375H16.875C17.3875 9.9375 17.8125 10.3625 17.8125 10.875C17.8125 11.3875 17.3875 11.8125 16.875 11.8125Z" fill="white"/>
                    <path d="M10 21.8125H7.5C6.9875 21.8125 6.5625 21.3875 6.5625 20.875C6.5625 20.3625 6.9875 19.9375 7.5 19.9375H10C10.5125 19.9375 10.9375 20.3625 10.9375 20.875C10.9375 21.3875 10.5125 21.8125 10 21.8125Z" fill="white"/>
                    <path d="M18.125 21.8125H13.125C12.6125 21.8125 12.1875 21.3875 12.1875 20.875C12.1875 20.3625 12.6125 19.9375 13.125 19.9375H18.125C18.6375 19.9375 19.0625 20.3625 19.0625 20.875C19.0625 21.3875 18.6375 21.8125 18.125 21.8125Z" fill="white"/>
                    <path d="M21.95 26.8125H8.05C3.075 26.8125 1.5625 25.3125 1.5625 20.3875V10.1125C1.5625 5.1875 3.075 3.6875 8.05 3.6875H16.875C17.3875 3.6875 17.8125 4.1125 17.8125 4.625C17.8125 5.1375 17.3875 5.5625 16.875 5.5625H8.05C4.125 5.5625 3.4375 6.2375 3.4375 10.1125V20.375C3.4375 24.25 4.125 24.925 8.05 24.925H21.9375C25.8625 24.925 26.55 24.25 26.55 20.375V15.275C26.55 14.7625 26.975 14.3375 27.4875 14.3375C28 14.3375 28.425 14.7625 28.425 15.275V20.375C28.4375 25.3125 26.925 26.8125 21.95 26.8125Z" fill="white"/>
                    <path d="M27.5 9H20.625C20.1125 9 19.6875 8.575 19.6875 8.0625C19.6875 7.55 20.1125 7.125 20.625 7.125H27.5C28.0125 7.125 28.4375 7.55 28.4375 8.0625C28.4375 8.575 28.0125 9 27.5 9Z" fill="white"/>
                    <path d="M24.0625 12.4375C23.55 12.4375 23.125 12.0125 23.125 11.5V4.625C23.125 4.1125 23.55 3.6875 24.0625 3.6875C24.575 3.6875 25 4.1125 25 4.625V11.5C25 12.0125 24.575 12.4375 24.0625 12.4375Z" fill="white"/>
                    </svg>

                    </div>
                    <p>Recargar</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='p-2 rounded-lg bg-red-700'>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.125 11.8125H2.5C1.9875 11.8125 1.5625 11.3875 1.5625 10.875C1.5625 10.3625 1.9875 9.9375 2.5 9.9375H18.125C18.6375 9.9375 19.0625 10.3625 19.0625 10.875C19.0625 11.3875 18.6375 11.8125 18.125 11.8125Z" fill="white"/>
                    <path d="M10 21.8125H7.5C6.9875 21.8125 6.5625 21.3875 6.5625 20.875C6.5625 20.3625 6.9875 19.9375 7.5 19.9375H10C10.5125 19.9375 10.9375 20.3625 10.9375 20.875C10.9375 21.3875 10.5125 21.8125 10 21.8125Z" fill="white"/>
                    <path d="M18.125 21.8125H13.125C12.6125 21.8125 12.1875 21.3875 12.1875 20.875C12.1875 20.3625 12.6125 19.9375 13.125 19.9375H18.125C18.6375 19.9375 19.0625 20.3625 19.0625 20.875C19.0625 21.3875 18.6375 21.8125 18.125 21.8125Z" fill="white"/>
                    <path d="M21.95 26.8125H8.05C3.075 26.8125 1.5625 25.3125 1.5625 20.3875V10.1125C1.5625 5.1875 3.075 3.6875 8.05 3.6875H18.125C18.6375 3.6875 19.0625 4.1125 19.0625 4.625C19.0625 5.1375 18.6375 5.5625 18.125 5.5625H8.05C4.125 5.5625 3.4375 6.2375 3.4375 10.1125V20.375C3.4375 24.25 4.125 24.925 8.05 24.925H21.9375C25.8625 24.925 26.55 24.25 26.55 20.375V17.775C26.55 17.2625 26.975 16.8375 27.4875 16.8375C28 16.8375 28.425 17.2625 28.425 17.775V20.375C28.4375 25.3125 26.925 26.8125 21.95 26.8125Z" fill="white"/>
                    <path d="M25 13.0625C24.875 13.0625 24.7625 13.0375 24.6375 12.9875C24.2875 12.8375 24.0625 12.5 24.0625 12.125V4.625C24.0625 4.1125 24.4875 3.6875 25 3.6875C25.5125 3.6875 25.9375 4.1125 25.9375 4.625V9.8625L26.8375 8.9625C27.2 8.6 27.8 8.6 28.1625 8.9625C28.525 9.325 28.525 9.925 28.1625 10.2875L25.6625 12.7875C25.4875 12.9625 25.25 13.0625 25 13.0625Z" fill="white"/>
                    <path d="M25 13.0625C24.7625 13.0625 24.525 12.975 24.3375 12.7875L21.8375 10.2875C21.475 9.92499 21.475 9.32499 21.8375 8.96249C22.2 8.59999 22.8 8.59999 23.1625 8.96249L25.6625 11.4625C26.025 11.825 26.025 12.425 25.6625 12.7875C25.475 12.975 25.2375 13.0625 25 13.0625Z" fill="white"/>
                    </svg>

                    </div>
                    <p>Retirar</p>
                </div>
                <Link to='/ranking'>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='p-2 rounded-lg bg-red-700'>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.26001 11.0199V15.9899C4.26001 17.8099 4.26001 17.8099 5.98001 18.9699L10.71 21.6999C11.42 22.1099 12.58 22.1099 13.29 21.6999L18.02 18.9699C19.74 17.8099 19.74 17.8099 19.74 15.9899V11.0199C19.74 9.19994 19.74 9.19994 18.02 8.03994L13.29 5.30994C12.58 4.89994 11.42 4.89994 10.71 5.30994L5.98001 8.03994C4.26001 9.19994 4.26001 9.19994 4.26001 11.0199Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.63 10.99L13.2 11.88C13.29 12.02 13.49 12.16 13.64 12.2L14.66 12.46C15.29 12.62 15.46 13.16 15.05 13.66L14.38 14.47C14.28 14.6 14.2 14.83 14.21 14.99L14.27 16.04C14.31 16.69 13.85 17.02 13.25 16.78L12.27 16.39C12.12 16.33 11.87 16.33 11.72 16.39L10.74 16.78C10.14 17.02 9.68002 16.68 9.72002 16.04L9.78002 14.99C9.79002 14.83 9.71002 14.59 9.61002 14.47L8.94002 13.66C8.53002 13.16 8.70002 12.62 9.33002 12.46L10.35 12.2C10.51 12.16 10.71 12.01 10.79 11.88L11.36 10.99C11.72 10.45 12.28 10.45 12.63 10.99Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </div>
                        <p>Ranking</p>
                    </div>
                </Link>
            </section>

            <section className='flex flex-col items-center rounded-2xl shadow-xl bg-white px-6 py-4 gap-8'>
                <div className='flex justify-between items-center w-full'>
                    <h1 className='font-bold text-l'>Presupuesto</h1>
                    <Link className='text-red-600 text-xs' to='/categories'>Ver mas</Link>
                </div>

                <HomeList
                name='Alquiler apartamento'
                value='$350.000'
                date='10/23/2023'
                svg={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M10 12h4v4h-4z" />
                </svg>}
                />

                <HomeList
                name='Tarjeta MIO'
                value='$12.000'
                date='10/23/2023'
                svg={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-car" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                </svg>}
                />
            </section>

            <h1 className='font-bold text-2xl'>Bolsillos</h1>

            <section className='flex flex-wrap gap-3'>
                {
                    hasPockets
                    ? <Pockets pockets={pocket}/> 
                    : <p>Aún no has creado ningun bolsillo</p>
                }
            </section>
            
            <section className='w-4/12'>
                <FormDialog onSubmit={createPocket}/>
            </section>
        </main>
    </div>
);
}