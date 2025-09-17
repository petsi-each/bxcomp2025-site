import Image from 'next/image'
import Link from 'next/link';

export interface Equipe {
    nome: string,
    membros: string[],
    pontos: number[],
    iconPath: string
}

interface RankingProps {
    equipes: Equipe[],
    displayQuantity?: number,
}

interface PointBarProps {
    equipe: Equipe,
    topScores: number[],
}

interface CoroaImageProps {
    scorePosition: number;
}

/**
 * Componente que representa o tipo de coroa do PointBar
 * 
 * @param {number} [scorePosition] - Posição do top; 
 */

const CoroaImage: React.FC<CoroaImageProps> = ({ scorePosition }) => {
    if (scorePosition == -1) return null;    
    if (scorePosition == 0) return (
        <div className="absolute -mt-40">
            <Image src="/ranking/coroaReiGelado.png" alt="" width={88} height={132} />
        </div>
    )
    if (scorePosition == 1) return(
        <div className="absolute -mt-24 -ml-12">
            <Image src="/ranking/coroaPrata.png" alt="" width={85} height={65} />
        </div>
    )
    if (scorePosition == 2) return(
        <div className="absolute -mt-24 -ml-12">
            <Image src="/ranking/coroaBronze.png" alt="" width={85} height={65} />
        </div>
    )
    return null;
}


/**
 * Componente que representa uma barra de pontos para uma equipe.
 *
 * @param {Equipe} equipe - Informações da equipe incluindo nome, membros, pontos e ícone.
 * @param {number} topScores - Lista com a quantidade de ponto dos tres primeiros lugares para renderizar coroa.
 */

const PointBar: React.FC<PointBarProps> = ({ equipe, topScores }) => {
    
    const totalPontos = equipe.pontos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const percentage = (totalPontos / topScores[0]) * 100

    const barWidth = percentage < 8 ? 'fit-content' :  percentage + '%'
    const remainingNameWidth = Math.max(0, 100 - percentage) + '%';
    // const minNameWidth = 150; // pixel size

    return (
        <article className="-z-10 text-white">

            {/* Descrição da equipe no mobile */}
            <div className="md:hidden w-screen px-8 mb-4">
                <h2 className="[@media(min-width:900px)]:text-2xl text-xl relative z-10 truncate">{equipe.nome}</h2>
                <p className="text-md font-bold">{totalPontos} pontos</p>
            </div>

            <div className="w-full px-8 mb-6 md:mb-0 flex items-center">
            <div style={{ width: barWidth }} className={`flex items-center`}>

                <div className="flex flex-grow items-center h-10 drop-shadow-lg bg-white rounded-full">
                    <div style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.4)' }} className="w-full rounded-full m-2 h-4 bg-laranja"></div>
                </div>

                <div>
                    <figure className="-ml-8 h-20 w-20 relative flex items-center justify-center drop-shadow-xl rounded-full bg-white">
                        <Image style={{padding:"7px"}} className="absolute" src={equipe.iconPath} sizes={"1"} alt={""} fill={true} />
                        <CoroaImage scorePosition={topScores.indexOf(totalPontos)}/>                 
                    </figure>
                </div>

                {/* Descrição da equipe no desktop */}
                
            </div>
                <div style={{ width: remainingNameWidth }} className="min-w-24 lg:min-w-48 px-4 hidden md:block"> 
                    <h2 className="text-xl w-full truncate">{equipe.nome}</h2>
                    <p className="text-sm font-bold w-full">{totalPontos} pontos</p>
                </div>
            </div>

        </article>

    );
}



/**
 * Apresenta um *Ranking* de equipes com base nos pontos.
 *
 * @param {RankingProps} equipes - Lista de equipes a serem exibidas no ranking.
 * @param {number} [displayQuantity] - OPCIONAL: Quantidade de equipes a serem exibidas. Se não especificado, exibe todas as equipes.
 * 
 */

const Ranking: React.FC<RankingProps> = ({ equipes, displayQuantity = -1 }) => {
    
    const sortedEquipes = [...equipes];
    displayQuantity = displayQuantity >= equipes.length ? -1 : displayQuantity; 


    const sumPoints = (points: number[]): number => {
        return points.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };

    sortedEquipes.sort((a, b) => sumPoints(b.pontos) - sumPoints(a.pontos));

    const topScores = Array.from(new Set(sortedEquipes.map(equipe => sumPoints(equipe.pontos)))).slice(0,3).filter(score => score !== 0).filter((score, idx, arr) => !(idx === 0 && score === 1));

    const displayEquipes = displayQuantity < 0 ? sortedEquipes : sortedEquipes.slice(0, displayQuantity) // Apresenta displayQuantity itens do array caso um valor seja determinado

    return (
        <section className="grid grid-rows-1 gap-8 md:gap-2 [@media(min-width:900px)]:ml-[35px]" style={{marginTop: "130px", marginBottom: "35px"}}>
            <h1 className="text-4xl font-semibold font-cinzel bg-gradient-to-b from-ouro via-amarelo to-amarelo text-transparent bg-clip-text" style={{height: '65px', paddingLeft: "2rem", marginTop: "10px" }}>Ranking</h1>
            {displayEquipes.map((equipe, index) => {
                return (
                    <PointBar key={index} equipe={equipe} topScores={topScores} />
                );
            })}
            {btnRankingCompleto(displayQuantity)}
        </section>  
    );
};

const btnRankingCompleto = (displayQuantity:number) => {
    if(displayQuantity != -1){
        return(
            <div className="flex justify-center mt-14">
                <button className="bg-azulelegante p-4 rounded-full">
                    <Link className="flex items-center" href="/RankingeGrupos">
                        <img className="w-7 mr-3" src="./ranking/foguete.png"></img>
                        <p className="text-md">Ranking Completo</p>
                    </Link>
                </button>
            </div>
        );
    }

    return null;
}

export default Ranking;