<script>
    /** @type {import('./$types').PageData} */
      import { Card, Button  } from "flowbite-svelte";

    export let data;
    let product = data.product
    console.log(product)
</script>
{#if !!product}
<div>
  <Card img="{product.images[0]}" reverse>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {product.description}
    </p>
    <Button href="/products">
      Back to products<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
    </Button>
  </Card>
</div>

{/if}