import Ranking from "./components/Ranking/Ranking";
import e from "../data/equipes.json"

export default function Home() {
  return (
    // só teste
    <div>
      {/* <h1 className="text-6xl font-eloquent bg-gradient-to-b from-creme via-azulciano to-azulciano text-transparent bg-clip-text" style={{height: '65px'}}>BXCOMP</h1> */}
      <Ranking equipes={e}></Ranking>
    </div>
  );
}
