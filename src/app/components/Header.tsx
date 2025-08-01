import Link from 'next/link';

const Header = () => {
    return (
        <div className="w-full flex justify-center bg-azulescuro">
            <div className="max-w-[1260px] w-full h-24 p-2.5 flex items-center">
                <Link 
                    href="/"
                    className="text-5xl md:text-6xl font-eloquent bg-gradient-to-b from-creme via-azulciano to-azulciano text-transparent bg-clip-text flex-shrink-0 hover:opacity-80 transition-opacity"
                >
                    BXCOMP
                </Link>
                
                <div className="flex-1 flex justify-end">
                    <div className="flex items-center gap-3 md:gap-6 overflow-x-auto py-2">
                        <Link 
                            href="/regulamento"
                            className="text-branco text-sm md:text-base font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                        >
                            Regulamento
                        </Link>
                        <Link 
                            href="/etapas"
                            className="text-branco text-sm md:text-base font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                        >
                            Etapas & Desafios
                        </Link>
                        <Link 
                            href="/ranking"
                            className="text-branco text-sm md:text-base font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                        >
                            Ranking & Grupos
                        </Link>
                        <Link 
                            href="/sobre"
                            className="text-branco text-sm md:text-base font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                        >
                            O que é o BXCOMP?
                        </Link>
                        <Link 
                            href="/anteriores"
                            className="text-branco text-sm md:text-base font-roboto whitespace-nowrap hover:text-azulciano transition-colors"
                        >
                            Anos anteriores
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;