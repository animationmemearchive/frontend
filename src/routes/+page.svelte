<script>
    export let data;

    import '@appwrite.io/pink';
</script>

<div class="container">
    <h1 class="heading-level-1">all the animation memes</h1>
    <h3 class="heading-level-6">not actually tho</h3>
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
                                <button class="tag" disabled><span class="text">Unknown</span></button>
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
    <p>REBUILT! work in progress, design will hopefully be updated & creators re-added</p>
</div>
