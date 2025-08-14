document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container-organizadores');
    const urlDados = 'organizadores.json';

    fetch(urlDados)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar os dados: ${response.statusText}`);
            }
            return response.json();
        })
        .then(organizadores => {
            // A cada 4 organizadores, criamos uma nova linha
            for (let i = 0; i < organizadores.length; i += 4) {
                // Cria a div .linha-organizador
                const linhaOrganizador = document.createElement('div');
                linhaOrganizador.classList.add('linha-organizador');
                
                // Div para os dois primeiros cards (dupla esquerda)
                const duplaEsquerda = document.createElement('div');
                duplaEsquerda.classList.add('dupla-organizador-esquerda');
                
                // Div para os dois últimos cards (dupla direita)
                const duplaDireita = document.createElement('div');
                duplaDireita.classList.add('dupla-organizador-direita');

                // Adiciona o primeiro organizador à dupla da esquerda, se existir
                if (organizadores[i]) {
                    duplaEsquerda.appendChild(criarCardOrganizador(organizadores[i]));
                }
                
                // Adiciona o segundo organizador à dupla da esquerda, se existir
                if (organizadores[i + 1]) {
                    duplaEsquerda.appendChild(criarCardOrganizador(organizadores[i + 1]));
                }
                
                // Adiciona o terceiro organizador à dupla da direita, se existir
                if (organizadores[i + 2]) {
                    duplaDireita.appendChild(criarCardOrganizador(organizadores[i + 2]));
                }

                // Adiciona o quarto organizador à dupla da direita, se existir
                if (organizadores[i + 3]) {
                    duplaDireita.appendChild(criarCardOrganizador(organizadores[i + 3]));
                }

                // Adiciona as duas duplas à linha principal
                linhaOrganizador.appendChild(duplaEsquerda);
                linhaOrganizador.appendChild(duplaDireita);
                
                // Adiciona a linha completa ao contêiner da página
                container.appendChild(linhaOrganizador);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            container.innerHTML = '<p>Não foi possível carregar os dados dos organizadores.</p>';
        });
});

// A função para criar o card HTML continua a mesma
function criarCardOrganizador(pessoa) {
    const cardHTML = `
        <div class="organizador">
            <div class="borda-tracejada">
                <div class="borda-azul">
                    <div class="foto">
                        ${pessoa.imgSrc ? `<img src="${pessoa.imgSrc}" alt="Foto de ${pessoa.nome}" class="foto">` : ''}
                    </div>
                </div>
            </div>
            
            ${pessoa.dev ? `<div class="div-selo-cabecudo"><img src="img/selo-cabecudo.svg" alt="Selo Cabecudo"></div>` : ''}

            <div>
                <button class="nome" onclick="abrirNovaAba('${pessoa.linkedinUrl}')">
                    <p style="margin-right: 8px;">&lt;${pessoa.nome}&gt;</p>
                    <img src="img/linkedin-icon.svg" alt="Logo Linkedin">
                </button>
            </div>
        </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = cardHTML.trim();
    return div.firstChild;
}