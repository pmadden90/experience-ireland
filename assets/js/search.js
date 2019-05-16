const endpoint = "assets/js/tourist-site.json";
const county = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => county.push(...data));
console.log("At work here");
function findMatches(wordToMatch, cities) {
    return county.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.county.match(regex) || place.category.match(regex);
        
    });
    
}

