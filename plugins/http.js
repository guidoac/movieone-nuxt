export default function (context) {
    context.$axios.setBaseURL(process.env.moviedb_baseurl);
    context.$axios.setToken(process.env.moviedb_api_key, 'Bearer');
}