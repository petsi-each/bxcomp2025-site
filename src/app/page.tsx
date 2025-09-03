import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import Ranking from "../components/Ranking/Ranking"
import Organizadores from "../components/Organizadores/Organizadores";
import e from "../data/equipes.json"
import "./globals.css";

export default function Home() {
  return (
    <div className="page">
      <Header />
          <Organizadores></Organizadores>
	        <Ranking equipes={e}></Ranking>
	    <Footer />
    </div>
  );
}