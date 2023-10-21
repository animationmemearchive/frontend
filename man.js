// the file is supposed to be named main.js but i typoed and it's funnier this way
window.onload = function () {
    const videogrid = document.getElementById('video-grid');
    fetch('http://localhost:3000/api/media')
        .then(response => response.json())
        .then(data => {
            data.forEach(async entry => {
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('videocontainer');
                videoContainer.style.textAlign = 'center';

                videoContainer.innerHTML =
                    `<video width="320" height="240" controls preload="none">
                    <source src="${entry.fullPath}" type="video/mp4">
                    </video>
                    <br>
                    <a href="${entry.fullPath}" target="_blank">${entry.fileInfo.title}</a>
                    <p>by ${entry.fileInfo.author}</p>`;

                videogrid.appendChild(videoContainer);
            });
        });
};