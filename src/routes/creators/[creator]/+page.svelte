<script>
    import { PUBLIC_API_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';

    export let data;

    import '@appwrite.io/pink';
    import '@appwrite.io/pink-icons';
</script>

<div class="container">
    <h1 class="heading-level-1">{data.creator.name}</h1>
    <a href={data.creator.sociallink}><h4 class="eyebrow-heading-3 link">{data.creator.sociallink}</h4></a>

    <a href="/">
        <button class="button is-secondary" aria-label="Go Home">
            <span class="icon-home" aria-hidden="true"></span>
            <span class="text">Home</span>
        </button></a>
    <br /> <br />

    <ul class="grid-box" style="--grid-gap:1rem; --grid-item-size:20rem; --grid-item-size-small-screens:8rem;">
        {#each data.videos as video}
            <!-- svelte-ignore a11y-media-has-caption -->
            <li>
                <div class="card">
                    <video
                        width="100%"
                        height="auto"
                        controls
                        preload="none"
                        poster={`${PUBLIC_API_ENDPOINT}/storage/buckets/thumbnails/files/${video.thumbID}/view?project=${PUBLIC_PROJECT_ID}`}>
                        <source
                            src={`${PUBLIC_API_ENDPOINT}/storage/buckets/videos/files/${video.videoID}/view?project=${PUBLIC_PROJECT_ID}`}
                            type="video/mp4" />
                    </video>
                    <br />
                    <a
                        href={`${PUBLIC_API_ENDPOINT}/storage/buckets/videos/files/${video.videoID}/view?project=${PUBLIC_PROJECT_ID}`}
                        target="_blank">{video.title}</a>
                </div>
            </li>{/each}
    </ul>

    <div class="video-grid">
        {#each data.videos as video}
            <!-- svelte-ignore a11y-media-has-caption -->
            <div class="videocontainer" style="text-align: center;">
                <video
                    width="320"
                    height="240"
                    controls
                    preload="none"
                    poster={`${PUBLIC_API_ENDPOINT}/storage/buckets/thumbnails/files/${video.thumbID}/view?project=${PUBLIC_PROJECT_ID}`}>
                    <source
                        src={`${PUBLIC_API_ENDPOINT}/storage/buckets/videos/files/${video.videoID}/view?project=${PUBLIC_PROJECT_ID}`}
                        type="video/mp4" />
                </video>
                <br />
                <a
                    href={`${PUBLIC_API_ENDPOINT}/storage/buckets/videos/files/${video.videoID}/view?project=${PUBLIC_PROJECT_ID}`}
                    target="_blank">{video.title}</a>
            </div>
        {/each}
    </div>
</div>
