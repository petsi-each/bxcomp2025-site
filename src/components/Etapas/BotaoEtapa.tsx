'use client'

import { MouseEventHandler } from "react";
import { Etapa } from '@/components/Etapas/EtapasInterfaces';

import idadeDaPedraIcon from './svgComponents/idadeDaPedraIcon';
import antigoEgitoIcon from './svgComponents/antigoEgitoIcon';
import futuroDigitalIcon from './svgComponents/futuroDigitalIcon';
import dimensaoIntergalacticaIcon from './svgComponents/dimensaoIntergalacticaIcon';
import apocaPETIcon from './svgComponents/apocaPETIcon';
import QuestionMark from "./svgComponents/questionMark";

const iconMap: Record<string, React.FC<{etapa: Etapa; selecionado: boolean}>> = {
    'idadeDaPedraIcon.tsx': idadeDaPedraIcon,
    'antigoEgitoIcon.tsx': antigoEgitoIcon,
    'futuroDigitalIcon.tsx': futuroDigitalIcon,
    'dimensaoIntergalacticaIcon.tsx': dimensaoIntergalacticaIcon,
    'apocaPETIcon.tsx': apocaPETIcon,
}

interface BotaoEtapaProps{
    etapa: Etapa,
    selecionado: boolean,
    onClick: MouseEventHandler
}

export default function BotaoEtapa(props: BotaoEtapaProps){
    const IconComponent = iconMap[props.etapa.iconName] || (() => <span />);

    return(
        
        <button aria-label={`mostrar etapa ${props.etapa.etapaIndice}`} disabled={props.etapa.estaLiberada == false} onClick={props.onClick} className={`flex flex-col items-center justify-end py-2 my-2`}>
            <div className={`flex flex-col items-center h-[35px] w-[35px] md:h-[4vw] md:w-[4vw] ${props.selecionado ? "scale-125" : "scale-100 opacity-50 hover:opacity-100"}`}>
                {
                    props.etapa.estaLiberada == false ?
                        <QuestionMark />
                        :
                        <IconComponent 
                            etapa={props.etapa}
                            selecionado={props.selecionado}
                        />
                }
            </div>
        </button>

    );
}