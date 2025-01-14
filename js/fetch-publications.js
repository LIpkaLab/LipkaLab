// Endpoint do Servidor Proxy
const endpoint = 'http://localhost:3000/fetch-scholar'; // Substitua pelo URL do proxy se estiver hospedado

// Função para Buscar e Exibir Artigos
async function fetchPublications() {
    try {
        console.log('Fetching data from:', endpoint); // Log para depuração
        const response = await fetch(endpoint); // Faz a requisição ao proxy
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Converte a resposta em JSON
        console.log('Fetched data:', data); // Log dos dados recebidos para depuração

        const articles = data.articles; // Acessa os artigos na resposta
        const publicationsList = document.getElementById('publications-list');
        publicationsList.innerHTML = ''; // Limpa o conteúdo existente

        // Adiciona cada artigo à lista de publicações
        articles.forEach((article) => {
            const publicationHTML = `
                <div class="publication-item">
                    <h3>${article.title}</h3>
                    <p><strong>Authors:</strong> ${article.authors}</p>
                    <p><i>${article.publication}</i>, ${article.year}</p>
                    <a href="${article.link}" target="_blank">Read More</a>
                </div>
            `;
            publicationsList.innerHTML += publicationHTML;
        });
    } catch (error) {
        console.error('Error fetching publications:', error); // Log do erro no console
        const publicationsList = document.getElementById('publications-list');
        publicationsList.innerHTML = '<p>Unable to fetch publications at the moment.</p>'; // Mensagem de erro para o usuário
    }
}

// Carrega Publicações ao Carregar a Página
document.addEventListener('DOMContentLoaded', fetchPublications);
