import Link from 'next/link';

const MainTitle = () => {
return (
    // Container principal que ocupa a tela inteira com um fundo escuro
    <main className="min-h-screen bg-[--azulescuro] text-white flex flex-col items-center justify-center p-8">
      
      {/* Container para limitar a largura do conteúdo e centralizá-lo */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center md:text-left">
		
        <img className="w-[500px]" src="./LogoBX.png"></img>
		
		<img className="w-[950px]" src="./GalaxyOwls.png"></img>
		
        {/* 2. Seção de Texto */}
        <div className="w-full max-w-xl">
          <h1 className="text-6xl md:text-7xl font-bold text-[--azulciano]">
            BXCOMP
          </h1>
          <p className="text-xl text---branco-300 mt-1">
            o que é?
          </p>

          {/* Linha decorativa */}
          <div className="w-2/3 h-px bg-[--branco] my-6 mx-auto md:mx-0"></div>

          <p className="text---branco-400 leading-relaxed">
            O BXComp é o Campeonato de Programação para Calouros do Curso de Sistemas de Informação organizado pelo PET-SI. Seu objetivo é criar um ambiente divertido e desafiador, composto por atividades de resolução de problemas usando programação.
          </p>

          {/* 3. Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-10">
            {/* Botão com fundo sólido */}
            <a
              href="/Regulamento" // Link para a página de regulamento
              className="bg-[--azulciano] text-[--azulescuro] font-bold py-3 px-8 rounded transition-transform duration-300 hover:scale-105"
            >
              REGULAMENTO
            </a>
            
            {/* Botão com borda (outline) */}
            <a
              href="/Sobre" // Link para outra página
              className="border-2 border-[--azulciano] text-[--azulciano] font-bold py-3 px-8 rounded transition-all duration-300 hover:bg-[#64FFDA]/10"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default MainTitle;