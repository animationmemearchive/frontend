window.onload = function () {
    const videogrid = document.getElementById('video-grid');
    fetch('http://localhost:3000/api/media')
        .then(response => response.json())
        .then(data => {
            data.forEach(entry => {
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('videocontainer');
                videoContainer.style.textAlign = 'center';

                const video = document.createElement('video');
                video.width = 320;
                video.height = 240;
                video.controls = true;
                video.preload = 'none';

                const source = document.createElement('source');
                source.src = entry.fullPath;
                source.type = 'video/mp4';

                video.appendChild(source);
                videoContainer.appendChild(video);

                const link = document.createElement('a');
                link.href = entry.fullPath;
                link.target = '_blank';
                link.textContent = entry.fullPath;

                videoContainer.appendChild(document.createElement('br'));
                videoContainer.appendChild(link);

                videogrid.appendChild(videoContainer);
            });
        });
};