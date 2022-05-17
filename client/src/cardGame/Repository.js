export function getCards() {
    const url = "http://localhost:8080/api/cards";
    const headers = { method: 'GET', headers: { 'Content-Type': 'application/json' } };

    return fetch(url, headers)
        .then(response => response.json())
        .catch(console.error)
}