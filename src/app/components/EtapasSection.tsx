'use client';
import { useState } from 'react';
import Link from 'next/link';
import CabecalhoEtapa from "../../components/Etapas/CabecalhoEtapa";
import BarraBotoes from "@/components/Etapas/BarraBotoes"; 
import etapasData from '@/data/etapas.json';

const EtapasSection = () => {
    const [idSelecionado, setIdSelecionado] = useState(0)
    return (
        <div id="EtapasSection" className="w-dvw flex flex-col justify-center gap-4 px-5 md:px-[9.6875rem] bg-transparent">
            <div id="Cabecalho" className="pt-[2.175rem]">
                <h1 className="block font-cinzel_decorative text-[4rem] font-[700] text-transparent bg-gradient-to-b from-creme from-5% via-ouro to-marromsuave bg-clip-text">
                    Etapas
                </h1>
                <p className="inline-block w-[24rem] font-poppins text-[1rem] text-creme">
                    Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!
                </p>
            </div>
            
            <BarraBotoes 
                etapas={etapasData}
                idSelecionado={idSelecionado}
                setIdSelecionado={setIdSelecionado}
            />

            <div className="flex flex-col md:flex-row justify-between">
                <CabecalhoEtapa 
                    etapas={etapasData}
                    idSelecionado={idSelecionado}
                />

                <div id="VerDesafios" className="flex flex-col my-8 justify-center items-center">
                    <Link href="/etapas">
                        <button className="text-creme border-2 bg-marrom border-marrom rounded-[1.5rem] px-[2.9375rem] py-[1.375rem] hover:bg-creme hover:text-marrom transition duration-300">
                                Ver desafios
                        </button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default EtapasSection;