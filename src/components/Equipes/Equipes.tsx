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
        if (displayer && window.innerWidth <= 1100) {
            displayer.scrollIntoView({behavior:'smooth', block: 'center',});
        }
    }
    
    return (
        <section className='pb-[7rem] pt-16 bg-creme'>
            
            {/* titulo do componente e descrição da seção  */}       
            <h1 className="text-azulelegante font-cinzel font-bold text-[3.2rem] pl-20"> eQuipeS </h1>
            <p className= {`p-4 font-medium text-md text-left text-preto pl-20`}> Conheça os competidores deste ano! </p>

            <section className="flex justify-center [@media(max-width:1100px)]:flex-col">

                {/* parte que mostra os botões de todas as equipes */}
                <section className="[@media(max-width:1100px)]:w-full w-[50vw] my-4 md:my-2 py-2 px-[15px] flex flex-wrap items-center justify-center">
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
                
                <section id="display" className="overflow-hidden [@media(max-width:1100px)]:mt-[100px] [@media(max-width:1100px)]:h-[74vh] [@media(max-width:1100px)]:w-full w-[50vw] px-4 flex flex-col items-center content-center justify-start">
                    
                    <img className="absolute w-[35rem] [@media(max-width:550px)]:w-[26rem] [@media(max-width:700px)]:p-[2rem] z-10" src="./ExibeEquipe2.svg"></img>
                    
                    <div className='relative top-[5rem] flex flex-col items-center justify-start'>
                        <div className="z-0 flex w-[17rem] h-[17rem] md:w-[20rem] md:h-[20rem] justify-center items-center relative p-[2.5rem] rounded-full bg-white"> 
                            <Image className="z-0 w-fit h-fit" alt="" width={130} height={130} src={equipes[idSelecionado].iconPath} />
                        </div>
                        <div className="relative text-center md:top-[-2.4rem] z-10 font-bold text-[1rem] pt-[10px]"> {totalPontos} {totalPontos == 1 ? " ponto " : "pontos" } </div>

                        <h2 className={`relative md:top-[-2.8rem] w-[84%] text-center z-10 break-words text-md tracking-wide drop-shadow-md p-2 text-2xl font-bold text-branco`}> {equipes[idSelecionado].nome} </h2>
                        <div className={`relative md:top-[-2.8rem] text-center z-10 w-full flex flex-col items-center justify-center text-sm text-branco`}>
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