import "./Organizadores.css"

export default function Organizador(pessoa:any){
    return (
        <div className="organizador">
            <div className="borda-tracejada">
                <div className="borda-azul">
                    <div className="foto">
                        <img src={pessoa.pessoa.imgSrc} alt={"Foto de " + pessoa.pessoa.nome} className="foto"></img>
                    </div>
                </div>
            </div>
            
            {exibeSelo(pessoa.pessoa)}

            <div>
                <a className="nome" href={pessoa.pessoa.linkedinUrl}>
                    <p style={{marginRight: "8px"}}>&lt;{pessoa.pessoa.nome}&gt;</p>
                    <img src="img/linkedin-icon.svg" alt="Logo Linkedin"></img>
                </a>
            </div>
        </div>
    );
}

function exibeSelo(pessoa: any){
    if(pessoa.dev){
        return (<div className="div-selo-cabecudo"><img src="img/selo-cabecudo.svg" alt="Selo Cabecudo"></img></div>);
    }
    else{
        return(<div style={{display: "none"}} className="div-selo-cabecudo"><img src="img/selo-cabecudo.svg" alt="Selo Cabecudo"></img></div>);
    }
}