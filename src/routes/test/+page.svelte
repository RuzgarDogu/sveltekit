<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("dataaaaa",data)
</script>
{#each data.reservations as r}
    <p><a href="/deneme/{r.operator_id}">{r.operator_id}</a></p>
{/each}
