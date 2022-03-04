export default async function ({ store }) {
    await store.dispatch('trending/fetchTrending');
    await store.dispatch('genres/fetchGenres');
    await store.dispatch('countries/fetchCountries');
    await store.dispatch('discover/fetchDiscover');
}