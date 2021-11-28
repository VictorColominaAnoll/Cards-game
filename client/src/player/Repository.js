import { API_URL } from "util.js"

export function create(username) {
    const url = "http://localhost:8080/api/player?name=" + username;
    const headers = { method: 'POST', headers: { 'Content-Type': 'application/json' } };

    return fetch(url, headers)
        .then(console.log)
        .catch(console.error)
}