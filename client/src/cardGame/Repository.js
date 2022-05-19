import { API_URL } from "../util";

export function getCards() {
    const url = API_URL + "/cards";
    const headers = { method: 'GET', headers: { 'Content-Type': 'application/json' } };

    return fetch(url, headers)
        .then(response => response.json())
        .catch(console.error)
}