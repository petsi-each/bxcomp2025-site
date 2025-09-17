"use client"

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="z-10 flex fixed top-0 w-screen justify-between bg-azulescuro items-center py-[5px] pl-8">
            <Link href="/">
                <img className="w-[160px]" src="./images/LogoBX.png"></img>
            </Link>

            {/* Desktop */}
            <div className="hidden [@media(min-width:900px)]:flex w-[850px] flex justify-evenly items-center py-2">
                <Link 
                    href="/Regulamento"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    Regulamento
                </Link>
                <Link 
                    href="/EtapaseDesafios"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    Etapas & Desafios
                </Link>
                <Link 
                    href="/RankingeGrupos"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    Ranking & Grupos
                </Link>
                <Link 
                    href="/Sobre"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    O que é o BXCOMP?
                </Link>
                <Link 
                    href="/AnosAnteriores"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    Anos anteriores
                </Link>
            </div>

            {/* Mobile */}
            {isOpen && <div className="[@media(min-width:900px)]:hidden bg-creme absolute top-0 right-0 flex flex-col w-[70%] h-[100vh] text-preto">
                <button className="flex justify-end" onClick={() => {
                    setIsOpen(!isOpen)
                }}><HiX className="w-[35px] h-[30px]"></HiX></button>
                <Link className="p-5" href="/Regulamento">Regulamento</Link>
                <Link className="p-5 border-t-2 border-branco" href="/EtapaseDesafios">Etapas & Desafios</Link>
                <Link className="p-5 border-t-2 border-branco" href="/RankingeGrupos">Ranking & Grupos</Link>
                <Link className="p-5 border-t-2 border-branco" href="/Sobre">O que é o BXCOMP?</Link>
                <Link className="p-5 border-t-2 border-branco" href="/AnosAnteriores">Anos anteriores</Link>
                <img src="./logo.png" className="w-[150px] m-auto"></img>
            </div>}

            <button
                className="[@media(min-width:900px)]:hidden mr-4 text-2xl z-1"
                onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                <HiMenu className="w-[35px] h-[30px]"></HiMenu>
            </button>

        </header>
        // <div className="w-full flex justify-center bg-azulescuro">
        //     <div className="max-w-[1260px] w-full h-24 p-2.5 flex items-center">
                // <div className="flex-1 flex justify-center">

                // </div>
        //     </div>
        // </div>
    );
};

export default Header;