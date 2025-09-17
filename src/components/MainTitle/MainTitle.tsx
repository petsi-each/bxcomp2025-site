import Link from 'next/link';

const MainTitle = () => {
  return (
    <main className="min-h-screen bg-[--azulescuro] text-white flex flex-col items-center justify-center md:pl-[5.3rem] pt-24">
      <div className="w-full flex flex-col justify-center flex-wrap items-center">
        
        <img className="w-[220px] [@media(min-width:650px)]:w-[30vw]" src="./images/LogoBX.png" alt="Logo BXCOMP" />
        <img className="w-[340px] [@media(min-width:650px)]:w-[50vw] top-[-5px] md:top-[-25px] relative" src="./images/GalaxyOwls.png" alt="Galaxy Owls" />
        
        <div className="flex flex-col md:flex-row items-start justify-between w-full md:gap-8">
          
          {/* Seção de Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col mt-20 justify-between">
            <div>
              <h1 className="text-[3rem] font-eloquent mx-[20px] text-[--azulciano] pb-6" style={{lineHeight: 1.3}}>
                O que é o BXCOMP?
              </h1>

              <p className="text---branco-400 leading-relaxed m-[20px] text-lg">
                O BXComp é o Campeonato de Programação para Calouros do Curso de Sistemas de Informação organizado pelo PET-SI. Seu objetivo é criar um ambiente divertido e desafiador, composto por atividades de resolução de problemas usando programação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
              <a
                href="/Regulamento"
                className="bg-[--azulciano] text-[--azulescuro] font-bold py-3 px-8 rounded transition-transform duration-300 hover:scale-105 text-center"
              >
                REGULAMENTO
              </a>
              <a
                href="/Sobre"
                className="border-2 border-[--azulciano] text-[--azulciano] font-bold py-3 px-8 rounded transition-all duration-300 hover:bg-[#64FFDA]/10 text-center"
              >
                SAIBA MAIS
              </a>
            </div>
          </div>
          
          {/* Container imagem*/}
          <div className="w-full md:w-1/3 flex justify-center items-start mt-10 md:mt-0">
            <div className="h-[500px] w-full flex items-center justify-center bg-gradient-to-br from-[--azulciano]/10 to-transparent rounded-lg p-6 md:p-0">
              <img 
                src="../images/camiseta.png" 
                alt="Camiseta" 
                className="max-h-full max-w-full object-contain transform scale-100"
              />
            </div>
          </div>
          
        </div>
        
      </div>
    </main>
  );
};

export default MainTitle;