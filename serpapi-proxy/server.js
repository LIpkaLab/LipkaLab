const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// Proxy endpoint
app.get('/fetch-scholar', async (req, res) => {
    const apiKey = '4458b87997fec3c9b039449f870acf9ecc543b307e07f607c16a12c557984cbe';
    const authorId = 'LeQcPl4AAAAJ';
    const endpoint = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${apiKey}`;

    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        res.json(data); // Retorna os dados do SerpAPI para o cliente
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data from SerpAPI' });
    }
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
