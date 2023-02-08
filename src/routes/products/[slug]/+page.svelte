<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let product = data.product
</script>
{#if !!product}
    <h1>{product.title}</h1>

{/if}