'use client';
import CabecalhoEtapa from "@/components/Etapas/CabecalhoEtapa";
import ConjuntoCards from "../../components/Etapas/ConjuntoCards";
import BarraBotoes from "@/components/Etapas/BarraBotoes"; 
import etapasData from '@/data/etapas.json';
import { useState } from "react";

const Exemplo = () => {
    const [idSelecionado, setIdSelecionado] = useState(0)

    return (
        <div id="EtapasPage" className="flex w-full flex-col justify-center gap-4 px-7 md:px-20 bg-transparent">
            <h1 className="text-6xl py-7 font-eloquent font-[500]
                    bg-gradient-to-b from-creme to-amarelo bg-clip-text text-transparent 
                    drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]">
                Etapas & Desafios
            </h1>

            <div className="flex flex-row justify-between mb-[40px]">
                <CabecalhoEtapa 
                    etapas={etapasData}
                    idSelecionado={idSelecionado}
                />
            </div>

            <BarraBotoes 
                etapas={etapasData}
                idSelecionado={idSelecionado}
                setIdSelecionado={setIdSelecionado}
            />

            <div className="flex justify-between items-center m-[auto] w-[95%] h-[2px] bg-yellow-400">
                <div className={`w-[14px] h-[14px] rounded-full bg-yellow-400`}></div>
                <div className={`w-[14px] h-[14px] rounded-full bg-yellow-400`}></div>
                <div className={`w-[14px] h-[14px] rounded-full bg-yellow-400`}></div>
                <div className={`w-[14px] h-[14px] rounded-full bg-yellow-400`}></div>
                <div className={`w-[14px] h-[14px] rounded-full bg-yellow-400`}></div>
            </div>

            <ConjuntoCards
                etapas={etapasData}
                idSelecionado={idSelecionado}
            />

        </div>
    );
};

export default Exemplo;