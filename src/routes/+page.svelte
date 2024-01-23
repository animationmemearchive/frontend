<script>
    export let data;

    import '@appwrite.io/pink';
</script>

<svelte:head>
    <title>animation meme archive</title>
</svelte:head>

<div class="container">
    <h1 class="heading-level-1">animation meme archive</h1>
    <br />
    <ul class="grid-box" style="--grid-gap:2rem; --grid-item-size:18rem; --grid-item-size-small-screens:16rem;">
        {#each data.creators as creator}
            <li>
                <div class="card">
                    <div class="grid-item-1">
                        <div class="grid-item-1-start-start">
                            <h2 class="heading-level-6 u-margin-block-start-4">{creator.name}</h2>
                        </div>
                        <div class="grid-item-1-start-end">
                            <div class="status">
                                <button class="tag is-info"><span class="text">Creator</span></button>
                            </div>
                        </div>
                        <div class="grid-item-1-end-start">
                            <div class="u-flex u-gap-16 u-flex-wrap">
                                <a href="/creators/{creator.id}">
                                    <button class="button">
                                        <span class="text">View</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        {/each}
    </ul>

    <br /><br />
    <p>REBUILT! work in progress, design subject to change & more creators coming soon</p>
    <p class="body-text-1 u-bold">to request a takedown, please email animationmemes@arti.lol</p>
</div>
