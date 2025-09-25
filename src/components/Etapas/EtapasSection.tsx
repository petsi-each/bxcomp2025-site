'use client';
import { useState } from 'react';
import Link from 'next/link';
import CabecalhoEtapa from "../../components/Etapas/CabecalhoEtapa";
import BarraBotoes from "@/components/Etapas/BarraBotoes"; 
import etapasData from '@/data/etapas.json';

const EtapasSection = () => {
    const [idSelecionado, setIdSelecionado] = useState(0)
    return (
        <div id="EtapasSection" className="w-full flex flex-col justify-center gap-4 px-7 mb-[4rem] md:px-20 bg-transparent">
            <div id="Cabecalho" className="pt-[2.175rem] mb-[40px]">
                <h1 className="block font-cinzel_decorative text-[3.2rem] font-[600] text-transparent bg-gradient-to-b from-ouro via-amarelo to-amarelo bg-clip-text">
                    etapas
                </h1>
                <p className="inline-block md:w-[24rem] mt-[10px] font-roboto text-4 text-creme">
                    Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!
                </p>
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
            

            <div className="flex flex-col md:flex-row justify-between mt-[50px]">
                <CabecalhoEtapa 
                    etapas={etapasData}
                    idSelecionado={idSelecionado}
                />

                <div id="VerDesafios" className="flex my-8 justify-center items-center md:mr-[100px]">
                    <Link href="/EtapaseDesafios">
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