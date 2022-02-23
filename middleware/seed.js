export default function (context) {
    context.store.dispatch('trending/fetchTrending')
}