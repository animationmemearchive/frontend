// the file is supposed to be named main.js but i typoed and it's funnier this way
window.onload = function () {
    const videogrid = document.getElementById('video-grid');
    fetch('http://localhost:3000/api/media')
        .then(response => response.json())
        .then(data => {
            data.forEach(async entry => {
                let fileInfo;
                await fetch(`http://localhost:3000/api/media/${entry.title}`)
                .then(response => response.json())
                .then(data => {
                    fileInfo = data;
                });

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
                link.textContent = fileInfo.title;

                const author = document.createElement('p');
                author.textContent = `by ${fileInfo.author}`;

                videoContainer.appendChild(document.createElement('br'));
                videoContainer.appendChild(link);
                videoContainer.appendChild(author)

                videogrid.appendChild(videoContainer);
            });
        });
};