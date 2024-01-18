<script>
    import { PUBLIC_API_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';

    export let data;
</script>

<h1>{data.creator}</h1>

<a href="/"><button>home</button></a><br /><br />

{#each data.videos as video}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video width="320" height="240" controls preload="none">
        <source
            src={`${PUBLIC_API_ENDPOINT}/storage/buckets/videos/files/${video.videoID}/view?project=${PUBLIC_PROJECT_ID}`}
            type="video/mp4" />
    </video>
    <p>{video.title}</p>
{/each}
