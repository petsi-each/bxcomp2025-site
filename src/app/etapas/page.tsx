'use client';
import CabecalhoEtapa from "@/components/Etapas/CabecalhoEtapa";
import ConjuntoCards from "./components/ConjuntoCards";
import BarraBotoes from "@/components/Etapas/BarraBotoes"; 
import etapasData from '@/data/etapas.json';
import { useState } from "react";

const Exemplo = () => {
    const [idSelecionado, setIdSelecionado] = useState(0)

    return (
        <div id="EtapasPage" className="flex w-full flex-col justify-center gap-4 px-4 md:px-10  bg-transparent">
            <div id="Cabecalho" className="pt-[2.175rem]">
                <h1 className="inline-block font-eloquent text-[34px] md:text-[4rem] font-[700] text-shadow-white-400 text-transparent bg-gradient-to-b from-branco from-5% via-amarelo to-marromsuave bg-clip-text">
                    Etapas & Desafios
                </h1>
            </div>

            <div className="flex flex-row justify-between">
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

            <ConjuntoCards 
                etapas={etapasData}
                idSelecionado={idSelecionado}
            />

        </div>
    );
};

export default Exemplo;