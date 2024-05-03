let searchCriteria = {id: "Section 2025-2026",
    year: "2025-2026",
    firstDate: "08/21/23",
    lastDate: "05/01/24",
};

let searchResults = []

fetch('http://localhost:8080/api/v1/sections', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(searchCriteria)
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        searchResults = data; // Assuming the response data is an array of sections
        console.log(searchResults);
    })
    .catch(error => {
        console.error('Error:', error);
        searchResults = [];
    });
