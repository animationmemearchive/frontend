<script>
    import { PUBLIC_BACKEND_HOST } from '$env/static/public';

    export let data;
</script>

<h1>{data.videos.data[0].attributes.creator.data.attributes.name}</h1>

<a href="/"><button>home</button></a><br /><br />

{#each data.videos.data as video}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video width="320" height="240" controls preload="none">
        <source src={PUBLIC_BACKEND_HOST + video.attributes.video.data.attributes.url} type="video/mp4" />
    </video>
    <p>{video.attributes.title}</p>
{/each}
