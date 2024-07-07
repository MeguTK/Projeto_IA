function fetchRecommendations() {
    const searchTerm = document.getElementById('search-bar').value;
    fetch(`/recommendations?title=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('recommendations-container');
            container.innerHTML = '';
            data.recommendations.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'recommendation-card';
                card.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.synopsis}</p>
                `;
                container.appendChild(card);
            });
        });
}
