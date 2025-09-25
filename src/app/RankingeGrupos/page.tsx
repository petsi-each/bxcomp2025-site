import Equipes from "@/components/Equipes/Equipes";
import Footer from "../../components/HeaderFooter/Footer";
import Header from "../../components/HeaderFooter/Header";
import Ranking from "../../components/Ranking/Ranking";
import e from "../../data/equipes.json"

const RankingeGrupos = () =>{
    return(
        <div className="page">
            <Header />
            <Equipes equipes={e}></Equipes>
            <Ranking equipes={e}></Ranking>
            <Footer />
        </div>
    );
}

export default RankingeGrupos;