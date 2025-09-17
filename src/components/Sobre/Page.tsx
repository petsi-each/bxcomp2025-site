import "./sobre.css";

export default function Sobre() {
    return(
        <div>
            <section className="o-que-e-o-bxcomp">
                <h1>
                O que é o <span className="bxcomp">BXComp?</span>
                </h1>

                <p>
                O tradicional Campeonato de Programação para Calouros do Curso de Sistemas de Informação
                da EACH-USP retorna com sua 15º edição! <br />
                <br />
                No ano de 2025, o BXCOMP está com o <strong>tema</strong> de <strong>Viagem no tempo!</strong>
                </p>

                <button>
                <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3259_649)">
                    <path d="M24.5 3.41669H10.5C8.575 3.41669 7.0175 4.95419 7.0175 6.83335L7 34.1667C7 36.0459 8.5575 37.5834 10.4825 37.5834H31.5C33.425 37.5834 35 36.0459 35 34.1667V13.6667L24.5 3.41669ZM28 30.75H14V27.3334H28V30.75ZM28 23.9167H14V20.5H28V23.9167ZM22.75 15.375V5.97919L32.375 15.375H22.75Z" fill="#081826"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_3259_649">
                        <rect width="42" height="41" fill="white" />
                    </clipPath>
                    </defs>
                </svg>
                <span><strong>REGULAMENTO</strong></span>
                </button>
            </section>

            <section className="objetivo">
                <div className="conteudo">
                <div className="imagem">
                    <img className="w-[340px] [@media(min-width:650px)]:w-[45vw]" src="/imgsSobre/logo-figura.png" alt="Logo BXComp" />
                </div>

                <div className="texto">
                    <h2>Objetivo</h2>
                    <p>
                    Nosso objetivo é criar um ambiente divertido e desafiador, composto por atividades de
                    resolução de problemas usando programação. <br /><br />
                    Os participantes aprendem e evoluem muito no decorrer do campeonato, o que torna o
                    evento ainda mais satisfatório!
                    </p>
                </div>
                </div>
            </section>

            <section className="organizacao">
                <div className="conteudo">
                <div className="imagem">
                    <img className="w-[340px] [@media(min-width:650px)]:w-[31vw]" src="/imgsSobre/deLorean.svg" alt="Imagem deLorean" />
                </div>

                <div className="texto">
                    <h2>Organização</h2>
                    <p>
                    O campeonato acontece em 5 etapas presenciais nos laboratórios da EACH, sendo organizado
                    como projeto do PET-SI (Programa de Educação Tutorial - Sistemas de Informação) da EACH.
                    <br /><br />
                    O PET é um programa do Governo Federal subordinado ao Ministério da Educação, cujo
                    objetivo é realizar projetos para os três pilares da graduação: ensino, pesquisa e
                    extensão. Acompanhe o PET para saber de suas outras iniciativas!
                    </p>
                </div>
                </div>
            </section>

            <section className="outras-competicoes">
                <div className="conteudo">
                <div className="imagem">
                    <img className="w-[340px] [@media(min-width:650px)]:w-[31vw]" src="/imgsSobre/relogio-azul.svg" alt="Imagem Relógio azul" />
                </div>

                <div className="texto">
                    <h2>Outras competições</h2>
                    <ul>
                    <li>
                        <strong>Olimpíada Brasileira de Informática (OBI)</strong>: promovida pela Sociedade
                        Brasileira de Computação (SBC). Veja mais detalhes em <a href="https://olimpiada.ic.unicamp.br/">olimpiada.ic.unicamp.br</a>
                    </li>
                    <br />
                    <li>
                        <strong>Maratona SBC de Programação</strong>: promovida pela SBC e eliminatória para o
                        <i> International Collegiate Programming Contest</i>. Veja em <a href="https://maratona.sbc.org.br/">maratona.sbc.org.br</a>
                    </li>
                    <br />
                    <li>
                        <strong><i>International Collegiate Programming Contest</i> (ICPC)</strong>: a maior e mais
                        prestigiada competição de programação para universitários. Veja em <a href="https://icpc.global/">icpc.global</a>
                    </li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
    );
}