<script>
    export let data;

    console.log(data.creators.data);
</script>

<h1>animation memes</h1>
{#each data.creators.data as creator}
    <p>{creator.attributes.Name}</p>
    <a href="/creators/{creator.id}"><button>go</button></a>
{/each}
