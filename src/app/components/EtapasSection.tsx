'use client';
import { useState } from 'react';
import CabecalhoEtapa from "../../components/Etapas/CabecalhoEtapa";
import BarraBotoes from "@/components/Etapas/BarraBotoes"; 
import etapasData from '@/data/etapas.json';

const EtapasSection = () => {
    const [idSelecionado, setIdSelecionado] = useState(0)
    return (
        <div id="EtapasSection" className="flex flex-col justify-center gap-4 px-[9.6875rem] bg-transparent">
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

            <div className="flex flex-row justify-between">
                <CabecalhoEtapa 
                    etapas={etapasData}
                    idSelecionado={idSelecionado}
                />

                <div id="VerDesafios" className="flex flex-col justify-center items-center">
                    <button className="text-creme border-2 bg-marrom border-marrom rounded-[1.5rem] px-[2.9375rem] py-[1.375rem] hover:bg-creme hover:text-marrom transition duration-300">
                        <a className="text-[1.5rem] font-roboto font-[700]" href="#">
                            Ver desafios
                        </a>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default EtapasSection;