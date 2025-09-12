import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface CabecalhoEtapaProps {
    etapas: Etapa[]
    idSelecionado: number
}

const CabecalhoEtapa: React.FC<CabecalhoEtapaProps> = ({etapas, idSelecionado}) => {
    
    return (

        <div id="Cabecalho" className="block">
            <h2 className="inline  text-creme text-[26px] md:text-[2rem] font-roboto font-[700]">
                &#x1FAA8; Etapa {etapas[idSelecionado].etapaIndice} - {etapas[idSelecionado].tema}
            </h2>
            <br />
            <p className="inline-block text-creme text-[17px] md:text-[1.25rem] font-roboto font-[700]">
                {etapas[idSelecionado].descricao}
            </p>
        </div>
    );
};

export default CabecalhoEtapa;