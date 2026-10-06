const API_KEY = "uZ2KQLU4YDrNB3gKQ9abjcXV1b6X-PMhw8ca6rw4h0E";
const url = 'https://api.unsplash.com/search/photos';

export default async function fetchApi(query = "Gato") {
    const params = new URLSearchParams({
        query,
        client_id: API_KEY,
        per_page: "20",
    });
    const response = await fetch(`${url}?${params}`);

    if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
}