export const getGifs = async (termino) => {
    const limit = 10;
    const apiKey = '8WJJ3ggOa8Nec8Q7tNm701DBWfyStiwY';
    const busqueda = encodeURI(termino);
    const url = `https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=${limit}&api_key=${apiKey}`;

    const results = await fetch(url);
    const {data} = await results.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}