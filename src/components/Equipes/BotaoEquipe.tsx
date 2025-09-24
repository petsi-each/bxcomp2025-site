'use client'

import Image from 'next/image';
import { MouseEventHandler } from "react";

interface ObjEquipe{
    nome: string;
    membros: string[];
    pontos: number[];
    iconPath: string;
}

interface BotaoEquipeProps{
    equipe: ObjEquipe,
    selecionado: boolean,
    onClick: MouseEventHandler
}

export default function BotaoEquipe(props: BotaoEquipeProps){
    return(
        
        <button aria-label={`mostrar equipe ${props.equipe.nome}`} onClick={props.onClick} className={`flex flex-col w-[8rem] h-[8rem] bg-branco items-center justify-center rounded-[15%] border-2 border-azulelegante hover:scale-110 ${props.selecionado ? 'border-4 scale-110' : 'border-2'}`}>
            <div className="relative m-2 w-24 2xl:w-28 h-[4.8rem] 2xl:h-28">
                <Image className="object-contain" src={props.equipe.iconPath} fill={true} alt=""></Image>
            </div>
            <p className="w-[5.5rem] truncate text-[1rem] text-center text-preto p-1"> {props.equipe.nome} </p>
        </button>

    );
}