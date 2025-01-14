// SerpApi Configuration
const apiKey = '4458b87997fec3c9b039449f870acf9ecc543b307e07f607c16a12c557984cbe'; // Substitua pela sua chave da SerpApi
const authorId = 'LeQcPl4AAAAJ'; // Substitua pelo ID do Google Scholar do autor
const endpoint = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${apiKey}`;

// Fetch and Display Articles
async function fetchPublications() {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const publicationsList = document.getElementById('publications');
        publicationsList.innerHTML = ''; // Limpa o conteúdo existente

        // Adiciona os artigos mais recentes
        data.articles.forEach((article) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${article.title}</strong> - ${article.publication}, ${article.year}
                <br>
                <a href="${article.link}" target="_blank">Read 
