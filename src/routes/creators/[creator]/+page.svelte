<script>
    import { PUBLIC_API_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';

    export let data;
</script>

<h1>{data.creator.name}</h1>
<a href={data.creator.sociallink}><h3>{data.creator.sociallink}</h3></a>

<a href="/"><button>home</button></a><br /><br />

<div class="video-grid">
    {#each data.videos as video}
        <!-- svelte-ignore a11y-media-has-caption -->
        <div class="videocontainer" style="text-align: center;">
            <video width="320" height="240" controls preload="none">
                <source
                    src={`${PUBLIC_API_ENDPOINT}/storage/buckets/videos/files/${video.videoID}/view?project=${PUBLIC_PROJECT_ID}`}
                    type="video/mp4" />
            </video>
            <br />
            <a href={`${PUBLIC_API_ENDPOINT}/storage/buckets/videos/files/${video.videoID}/view?project=${PUBLIC_PROJECT_ID}`} target="_blank"
                >{video.title}</a>
        </div>
    {/each}
</div>
