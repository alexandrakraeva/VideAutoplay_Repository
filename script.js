document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('Cartoon');
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });

    video.onended = function () {
        // Optional: Redirect or perform an action after the video ends
    };
});
