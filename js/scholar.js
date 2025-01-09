// SerpApi Configuration
const apiKey = '4458b87997fec3c9b039449f870acf9ecc543b307e07f607c16a12c557984cbe'; // Replace with your SerpApi key
const authorId = 'Alexander E. Lipka'; // Replace with Dr. Alex's Google Scholar ID
const endpoint = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${apiKey}`;

// Fetch and Display Articles
async function fetchPublications() {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const publicationsList = document.getElementById('publications');
        publicationsList.innerHTML = ''; // Clear existing content

        // Add the latest articles
        data.articles.forEach((article) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${article.title}</strong> - ${article.publication}, ${article.year}
                <br>
                <a href="${article.link}" target="_blank">Read More</a>
            `;
            publicationsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching publications:', error);
        const publicationsList = document.getElementById('publications');
        publicationsList.innerHTML = '<li>Unable to fetch publications at the moment.</li>';
    }
}

// Load Publications on Page Load
document.addEventListener('DOMContentLoaded', fetchPublications);
