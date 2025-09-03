import Footer from "../../components/HeaderFooter/Footer";
import Header from "../../components/HeaderFooter/Header";
import Ranking from "../../components/Ranking/Ranking";
import e from "../../data/equipes.json"

const RankingeGrupos = () =>{
    return(
        <div className="page">
            <Header />
            <Ranking equipes={e}></Ranking>
            <Footer />
        </div>
    );
}

export default RankingeGrupos;