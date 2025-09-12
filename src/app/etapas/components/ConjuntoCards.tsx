import etapas from '@/data/etapas.json';
import { Etapa } from '@/components/Etapas/EtapasInterfaces';
import CardDesafios from "./CardDesafios";
import { DesafioList } from "@/components/Etapas/EtapasInterfaces";
import BarraBotoes from '@/components/Etapas/BarraBotoes';
import { useState } from "react";

interface CabecalhoEtapaProps {
    etapas: Etapa[]
    idSelecionado: number
}


const ConjuntoCards: React.FC<CabecalhoEtapaProps> = ({etapas, idSelecionado}) => {

    return (
        <main>
            <div className="flex items-center flex-col">
                <section id="scrollDestiny" className="pt-5 mb-20 mx-8"> {/*a fim do scroll ter como destino um ponto ligeiramente anterior ao início do primeiro balao de desafio, ao invés de utilizar mt-8, aqui usamos pt-8 */} 
                    {
                        idSelecionado != -1 && ( //garantindo que os CardDesafios só serão chamados caso haja um valor válido em 'indice', evitando tentativas de acesso à posições não existentes no arranjo de etapas
                            <CardDesafios desafios={(etapas[idSelecionado]).desafios} /> 
                        )
                    }
                </section>
            </div>
        </main>
    );
};

export default ConjuntoCards;