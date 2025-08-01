const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full">
            {/* Elemento SVG que cria a forma de onda */}
            <svg 
                viewBox="0 0 1440 320" 
                className="w-full h-80 -mb-1 fill-creme" 
                preserveAspectRatio="none"
            >
                <path 
                    fillOpacity="1" 
                    d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,149.3C672,128,768,96,864,96C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            
            {/* Conteúdo do footer posicionado sobre a onda */}
            <div className="absolute top-2/3 left-0 w-full flex justify-center items-end pb-16">
                <div className="max-w-6xl w-full flex justify-between items-center px-4">
                    <div className="text-preto text-1xl font-normal font-roboto">
                        Desenvolvido por PET-SI 2025
                    </div>
                    
                    <div className="flex items-center gap-4">
						<img className="w-24 h-auto" src="/images/BXCOMP.png" alt="" />
						<img className="w-20 h-auto" src="/images/PETLogo.png" alt="" />
                    </div>
                    
                    <div className="flex items-center gap-4">
						<a href="https://www.facebook.com/petsieach" target="_blank" rel="noopener noreferrer">
							<img className="w-10 h-10" src="/images/facebookLogo.png" alt="" />
						</a>
						<a href="https://www.instagram.com/petsieach/" target="_blank" rel="noopener noreferrer">
							<img className="w-10 h-10" src="/images/instagramLogo.png" alt="" />
						</a>
						<a href="https://www.linkedin.com/company/pet-si-each-usp/" target="_blank" rel="noopener noreferrer">
							<img className="w-15 h-10" src="/images/linkedinLogo.png" alt="" />
						</a>
						<a href="mailto:pet-si-each@usp.br">
							<img className="w-10 h-10" src="/images/emailLogo.png" alt="" />
						</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;