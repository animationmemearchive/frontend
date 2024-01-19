<script>
    export let data;
</script>

<div style="text-align: left;">
    <h1>all the animation memes</h1>
    <h3>not actually tho</h3>
    <br />
    {#each data.creators as creator}
        <a href="/creators/{creator.id}">{creator.name}</a><br />
    {/each}
    <br /><br />
    <p>REBUILT! work in progress, design will hopefully be updated & creators re-added</p>
</div>
