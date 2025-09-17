import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface CabecalhoEtapaProps {
    etapas: Etapa[]
    idSelecionado: number
}

const CabecalhoEtapa: React.FC<CabecalhoEtapaProps> = ({etapas, idSelecionado}) => {
    
    return (

        <div id="Cabecalho" className="block">
            <h2 className="text-creme text-[25px] font-roboto font-[600] mb-[22px]">
                &#x1FAA8; Etapa {etapas[idSelecionado].etapaIndice} - {etapas[idSelecionado].tema}
            </h2>
            <p className="inline-block text-creme text-[1.00rem] md:text-[1.10rem] font-roboto md:w-[52vw]">
                {etapas[idSelecionado].descricao}
            </p>
        </div>
    );
};

export default CabecalhoEtapa;