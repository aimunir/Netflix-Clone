const API_KEY='e8fda90f0a34888c1b7a7d2c4e6e7b69';

const request={
    fetchTrending:` /trending/all/week?api_key=${API_KEY}&language==en-US`,
    fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


export default request;