<script>
    export let data;
</script>

<h1>animation memes</h1>
{#each data.creators as creator}
    <p>{creator.replace('/', '')}</p>
    <a href="/creators/{creator}"><button>go</button></a>
{/each}
