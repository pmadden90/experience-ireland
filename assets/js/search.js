const endpoint = "js/tourist-site.json";
const county = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => county.push(...data));

function findMatches(wordToMatch, cities) {
    return county.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.county.match(regex) || place.category.match(regex);
        
    });
    
}

