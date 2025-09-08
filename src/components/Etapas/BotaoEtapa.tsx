'use client'

import { MouseEventHandler } from "react";
import { Etapa } from '@/components/Etapas/EtapasInterfaces';

import idadeDaPedraIcon from '../../../public/etapas/imagens/svgComponents/idadeDaPedraIcon';
import antigoEgitoIcon from '../../../public/etapas/imagens/svgComponents/antigoEgitoIcon';
import futuroDigitalIcon from '../../../public/etapas/imagens/svgComponents/futuroDigitalIcon';
import dimensaoIntergalacticaIcon from '../../../public/etapas/imagens/svgComponents/dimensaoIntergalacticaIcon';
import apocaPETIcon from '../../../public/etapas/imagens/svgComponents/apocaPETIcon';

const iconMap: Record<string, React.FC<{etapa: Etapa; selecionado: boolean}>> = {
    '/etapas/imagens/svgComponents/idadeDaPedraIcon.tsx': idadeDaPedraIcon,
    '/etapas/imagens/svgComponents/antigoEgitoIcon.tsx': antigoEgitoIcon,
    '/etapas/imagens/svgComponents/futuroDigitalIcon.tsx': futuroDigitalIcon,
    '/etapas/imagens/svgComponents/dimensaoIntergalacticaIcon.tsx': dimensaoIntergalacticaIcon,
    '/etapas/imagens/svgComponents/apocaPETIcon.tsx': apocaPETIcon,
}

interface BotaoEtapaProps{
    etapa: Etapa,
    selecionado: boolean,
    onClick: MouseEventHandler
}

export default function BotaoEtapa(props: BotaoEtapaProps){
    const IconComponent = iconMap[props.etapa.iconPath] || (() => <span />);

    return(
        
        <button aria-label={`mostrar etapa ${props.etapa.etapaIndice}`} onClick={props.onClick} className={`flex flex-col items-center justify-center w-20 2xl:w-28 py-2 px-2 h-24 2xl:h-32 mx-1 my-2  ${props.selecionado ? 'bg-laranjaBX' : 'opacity-50 bg-brancoBX hover:opacity-100'}`}>
            <div className="relative w-20 2xl:w-28 h-24 2xl:h-32">
                <IconComponent 
                    etapa={props.etapa}
                    selecionado={props.selecionado}
                />
            </div>
        </button>

    );
}