<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let products = data.store

</script>
{#each products as product}
    <p><a href="/products/{product.id}">{product.title}</a></p>
{/each}