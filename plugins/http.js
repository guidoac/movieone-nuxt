export default function ({ $axios }, inject) {
    $axios.setHeader('Authorization', `Bearer ${process.env.moviedb_token_read}`);
    $axios.setHeader('Content-Type', 'application/json;charset=utf-8');
    $axios.setBaseURL(process.env.moviedb_baseurl);

    const backImgURL = $axios.create({
        baseURL: process.env.moviedb_backdrop_baseurl
    })

    const posterImgURL = $axios.create({
        baseURL: process.env.moviedb_poster_baseurl
    })

    inject('backdrop_url', backImgURL.defaults.baseURL);

    inject('poster_url', posterImgURL.defaults.baseURL);
}