'use client'

import BotaoEtapa from "./BotaoEtapa"
import { Etapa } from '@/components/Etapas/EtapasInterfaces';


interface BarraProps {
    etapas: Etapa[]
    idSelecionado: number
    setIdSelecionado: (id: number) => void
}

const BarraBotoes: React.FC<BarraProps> = ({etapas, idSelecionado, setIdSelecionado}) => {
    
    const scrolltodisplayer = () => {
        const displayer = document.getElementById('display');
        if (displayer && window.innerWidth < 768) {
            displayer.scrollIntoView({behavior:'smooth', block: 'start',});
        }
    }

    return (
            <section className="flex flex-row justify-between">
                { 
                    etapas.map((etapa, idx) => {
                        return <BotaoEtapa 
                                    key={idx} 
                                    etapa={etapa} 
                                    selecionado={idSelecionado==idx} 
                                    onClick={()=> {setIdSelecionado(idx); scrolltodisplayer();}} 
                                />  
                    })
                }
            </section>
    );
}
export default BarraBotoes;