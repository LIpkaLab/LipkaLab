// SerpApi Configuration
const apiKey = '4458b87997fec3c9b039449f870acf9ecc543b307e07f607c16a12c557984cbe'; // Substitua pela sua chave do SerpApi
const authorId = 'LeQcPl4AAAAJ'; // ID do autor do Google Scholar
const endpoint = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${apiKey}`;

// Fetch and Display Articles
async function fetchPublications() {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const publicationsList = document.getElementById('publications-list');
        publicationsList.innerHTML = ''; // Limpa o conteúdo existente

        // Adiciona os artigos mais recentes
        data.articles.forEach((article) => {
            const publicationHTML = `
                <div class="publication-item">
                    <h3>${article.title}</h3>
                    <p><strong>Authors:</strong> ${article.authors.join(', ')}</p>
                    <p><i>${article.publication}</i>, ${article.year}</p>
                    <a href="${article.link}" target="_blank">Read More</a>
                </div>
            `;
            publicationsList.innerHTML += publicationHTML;
        });
    } catch (error) {
        console.error('Error fetching publications:', error);
        const publicationsList = document.getElementById('publications-list');
        publicationsList.innerHTML = '<p>Unable to fetch publications at the moment.</p>';
    }
}

// Load Publications on Page Load
document.addEventListener('DOMContentLoaded', fetchPublications);
