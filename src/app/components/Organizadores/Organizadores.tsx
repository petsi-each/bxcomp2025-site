import organizadoresList from "../../../data/organizadores.json";
import Organizador from "./Organizador";
import "./Organizadores.css"

export default function Organizadores(){
    return (
        <section className="mt-[130px]">
            <div className="titulo">
                <h1 className="text-4xl">Organizadores</h1>
            </div>
            <div id="container-organizadores" className="coluna-organizador">
                {carregarTodos()}
            </div>
        </section>
    )
}

function carregarTodos() {
    return organizadoresList.map((organizador, i) => (
        <Organizador key={i} pessoa={organizador} />
    ));
}