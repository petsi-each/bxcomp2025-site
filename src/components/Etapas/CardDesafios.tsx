import { DesafioList } from "@/components/Etapas/EtapasInterfaces";

export default function CardDesafios(props: DesafioList) {
    const desafioFinalObj = props.desafios[props.desafios.length-1];

    return (
        <div>
            <div className="flex flex-wrap justify-center w-full gap-5">
                {
                    props.desafios.map((desafioObj, idx) => (
                        <article key={idx} className={`flex flex-col cursor-pointer justify-evenly px-16 py-6 w-[315px] [@media(min-width:420px)]:w-[430px] min-h-[215px] h-[auto] bg-amarelo rounded-[1vw] text-center text-pretoBX hover:transition-all hover:duration-150 hover:ring-8 hover:ring-azulelegante`}>
                            <h2 className="text-2xl font-eloquent text-azulelegante">{desafioObj.desafio}</h2>
                            <p className={`flex items-center flex-col font-poppins text-base `}>
                                <a href={desafioObj.enunciado} target="_blank" className="font-roboto font-bold  text-marrom w-fit hover:transition-all hover:duration-100 hover:scale-[1.13] hover:font-bold hover:text-white">Enunciado</a>
                                <a href={desafioObj.casosTeste} target="_blank" className="w-fit hover:transition-all hover:duration-100 hover:scale-[1.13] hover:font-bold hover:text-white">Casos Teste - Casos Teste</a>
                                <a href={desafioObj.resolucao} target="_blank" className="w-fit hover:transition-all hover:duration-100 hover:scale-[1.13] hover:font-bold hover:text-white">Exemplo de Gabarito</a>
                            </p>
                        </article>
                    ))
                }
            </div>
        </div>
        
    );
}