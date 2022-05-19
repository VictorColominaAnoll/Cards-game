let uri = "http://localhost:8080/api";
if (process.env.NODE_ENV === "production") uri = "https://spriesof-games.herokuapp.com/api";

export const API_URL = uri;