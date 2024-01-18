<script>
    export let data;
</script>

<h1>animation memes</h1>
{#each data.creators as creator}
    <p>{creator.name}</p>
    <a href="/creators/{creator.id}"><button>go</button></a>
{/each}
