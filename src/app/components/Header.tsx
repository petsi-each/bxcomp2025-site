"use client"

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="z-10 flex fixed w-full justify-between bg-azulescuro items-center py-[10px] px-10">
            <Link href="/">
                <img style={{width: "95%"}} src="./LogoBX.png"></img>
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex w-[850px] flex justify-evenly items-center py-2">
                <Link 
                    href="/regulamento"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    Regulamento
                </Link>
                <Link 
                    href="/etapas"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    Etapas & Desafios
                </Link>
                <Link 
                    href="/ranking"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    Ranking & Grupos
                </Link>
                <Link 
                    href="/sobre"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    O que é o BXCOMP?
                </Link>
                <Link 
                    href="/anteriores"
                    className="text-branco text-sm md:text-sm font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                >
                    Anos anteriores
                </Link>
            </div>

            {/* Mobile */}
            {isOpen && <div className="md:hidden bg-branco absolute top-0 right-0 flex flex-col w-[70%] h-[100vh] text-preto">
                <button onClick={() => {
                    setIsOpen(!isOpen)
                }}><HiX></HiX></button>
                <Link className="p-5 border-b-2 border-creme" href="/regulamento">Regulamento</Link>
                <Link className="p-5 border-b-2 border-creme" href="/etapas">Etapas & Desafios</Link>
                <Link className="p-5 border-b-2 border-creme" href="/ranking">Ranking & Grupos</Link>
                <Link className="p-5 border-b-2 border-creme" href="/sobre">O que é o BXCOMP?</Link>
                <Link className="p-5 border-b-2 border-creme" href="/anteriores">Anos anteriores</Link>
            </div>}

            <button
                className="md:hidden text-2xl z-20"
                onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                <HiMenu />
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