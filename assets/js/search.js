const endpoint = "https://api.myjson.com/bins/13exec";
const county = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => county.push(...data));

function findMatches(wordToMatch, county) {
    return county.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.county.match(regex) || place.category.match(regex);
        
    });
    
}
function displayMatches() {
            const matchArray = findMatches(this.value, county);
            const html = matchArray.map(place => {
                const regex = new RegExp(this.value, 'gi');
                const countyName = place.county.replace(regex, `<span class="hl">${this.value}</span>`);
                const categoryName = place.category.replace(regex, `<span class="hl">${this.value}</span>`);
                const locationName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
                return `
      <li>
        <span class="name">${locationName}, ${countyName} (${categoryName})</span>
      </li>
    `;
            }).join('');
            suggestions.innerHTML = html;
        }
        const searchInput = document.querySelector('.search');
        const suggestions = document.querySelector('.suggestions');
        searchInput.addEventListener('change', displayMatches);
        searchInput.addEventListener('keyup', displayMatches);

