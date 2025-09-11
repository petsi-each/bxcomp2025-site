import { useState } from 'react';
import Footer from "../../components/HeaderFooter/Footer";
import Header from "../../components/HeaderFooter/Header";
import regulamento from "../../data/regulamento.json"

export default function Regulamento(){

    const datas = regulamento.modificacoes.map(mod => {
        const [day, month, year] = mod.data.split('/').map(Number);
        return new Date(year, month - 1, day);
    });

    const latestDate = new Date(Math.max(...datas.map(data => data.getTime())));

    return (
        <>
        <Header />
        <main className='mt-16 text-center'>
            
            <h1 className='text-ouro font-eloquent text-3xl md:text-5xl px-2 py-12'>Regulamento 2025</h1>

            <p className='font-times text-xl md:text-2xl'><b>Última atualização em:</b> {latestDate.toLocaleDateString('pt-BR')}</p>

            <div className="w-full flex items-center justify-center px-8">
            <iframe
                src={regulamento.arquivo}
                title="Regulamento"
                className="py-4 w-full max-w-[50rem] h-[36rem] lg:h-[50rem]"
            >
            </iframe>
            </div>
            <ul className={`font-times text-2xl flex flex-col items-center`}>
                {
                    regulamento.modificacoes.map((modificacao, idx) => {
                        return <li key={idx}><b>{modificacao.tipo}</b> em: {modificacao.data}</li>
                    })
                }

            </ul>

        </main>
        <Footer />
        </>
    );
}