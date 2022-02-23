export default function ({ store }) {
    store.dispatch('trending/fetchTrending')
}