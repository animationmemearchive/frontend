<script>
    import { env } from '$env/static/public';

    export let data;

    console.log(data);
</script>

{#each data.videos.data as video}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video width="320" height="240" controls>
        <source src={env.PUBLIC_BACKEND_HOST + video.attributes.video.data.attributes.url} type="video/mp4" />
    </video>
    <p>{video.attributes.title}</p>
{/each}
