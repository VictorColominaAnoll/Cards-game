export function create(name) {
    const url = "http://localhost:8080/api/game?name=" + name + "&player=" + localStorage.getItem("player");
    const headers = { method: 'POST', headers: { 'Content-Type': 'application/json' } };

    return fetch(url, headers)
        .then(console.log)
        .catch(console.error)
}