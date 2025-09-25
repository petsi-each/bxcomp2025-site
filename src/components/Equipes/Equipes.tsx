'use client'

import Image from 'next/image';
import { Poppins } from 'next/font/google'
import { Lilita_One } from 'next/font/google'
import { useState } from "react"
import BotaoEquipe from './BotaoEquipe';

const poppins = Poppins({weight: "300", subsets: ['latin']})
const lilita = Lilita_One({weight: "400", subsets: ['latin']})

export interface Equipe {
    nome: string,
    membros: string[],
    pontos: number[],
    iconPath: string
}

interface EquipesProps {
    equipes: Equipe[]
}

const Equipes: React.FC<EquipesProps> = ({equipes}) => {

    /* variavel usada para selecionar equipe para o botao clicado */
    const [idSelecionado, setIdSelecionado] = useState(0)
    const totalPontos = equipes[idSelecionado].pontos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const scrolltodisplayer = () => {
        const displayer = document.getElementById('display');
        if (displayer && window.innerWidth < 768) {
            displayer.scrollIntoView({behavior:'smooth', block: 'start',});
        }
    }
    
    return (
        <section className='pb-[7rem] pt-16 bg-creme'>
            
            {/* titulo do componente e descrição da seção  */}       
            <h1 id="display" className="text-azulelegante font-cinzel font-bold text-[3.2rem] pl-20"> eQuipeS </h1>
            <p className= {`p-4 font-medium text-md text-left text-preto pl-20`}> Conheça os competidores deste ano! </p>

            <section className="flex justify-center [@media(max-width:1100px)]:flex-col">

                {/* parte que mostra os botões de todas as equipes */}
                <section className="[@media(max-width:1100px)]:w-full w-[50vw] my-4 md:my-2 py-2 md:px-8 lg:px-[15px] flex flex-wrap items-center justify-center">
                    <section className="gap-8 sm:grid-flow-col flex sm:h-fit flex-wrap items-center justify-center">
                        { equipes.map((equipe, idx) => {
                            return <BotaoEquipe 
                                    key={idx} 
                                    equipe={equipe} 
                                    selecionado={idSelecionado==idx} 
                                    onClick={()=> {setIdSelecionado(idx); scrolltodisplayer();}} />  
                        })
                        }

                    </section>
                </section>

                <section className="overflow-hidden [@media(max-width:1100px)]:mt-[110px] [@media(max-width:1100px)]:w-full w-[50vw] px-4 flex flex-col items-center content-center justify-center">
                    
                    <img className="absolute w-[35rem]" src="./ExibeEquipe.svg"></img>
                    
                    <div className='relative top-[0.4rem] flex flex-col items-center justify-center'>
                        <div className="z-0 flex w-[14rem] h-[14rem] justify-center items-center relative border-8 p-[1rem] rounded-full bg-white drop-shadow-lg"> 
                            <Image className="z-0 w-fit h-fit" alt="" width={130} height={130} src={equipes[idSelecionado].iconPath} />
                        </div>
                        <div className="text-center font-bold text-[1rem] pt-[10px]"> {totalPontos} {totalPontos == 1 ? " ponto " : "pontos" } </div>

                        <h2 className={`text-center break-words text-md tracking-wide drop-shadow-md p-2 text-2xl font-bold text-branco`}> {equipes[idSelecionado].nome} </h2>
                        <div className={`text-center w-full flex flex-col items-center justify-center text-sm text-branco`}>
                            {equipes[idSelecionado].membros.map((membro, idx) => {
                                return (
                                <p key={idx} className="truncate w-full px-4 sm:px-0 text-center">{membro}</p>); })}
                        </div>
                    </div>
                </section>

            </section>
        </section>
    );

}

export default Equipes;