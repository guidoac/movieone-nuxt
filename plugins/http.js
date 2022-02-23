export default function ({ $axios }) {
    $axios.setHeader('Authorization', `Bearer ${process.env.moviedb_token_read}`);
    $axios.setHeader('Content-Type', 'application/json;charset=utf-8');
}