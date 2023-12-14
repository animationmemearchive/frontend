<script>
    export let data;

    console.log(data.creators.data);
</script>

<h1>animation memes</h1>
{#each data.creators.data as creator}
    <p>{creator.attributes.Name}</p>
{/each}
