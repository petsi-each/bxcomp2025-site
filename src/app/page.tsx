
import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import Ranking from "../components/Ranking/Ranking"
import Organizadores from "../components/Organizadores/Organizadores";
import e from "../data/equipes.json"
import "./globals.css";
import EtapasSection from '@/components/Etapas/EtapasSection';

export default function Home() {
  return (
    <div className="page">
      <Header />
          <EtapasSection></EtapasSection>
	        <Ranking equipes={e} displayQuantity={4}></Ranking>
	    <Footer />
    </div>
  );
}