document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('Cartoon');

    // Play video on user interaction
    document.body.addEventListener('click', function () {
        video.play();
    });

    video.addEventListener('loadedmetadata', () => {
        // Attempt to play video
        video.play().catch(e => {
            // Autoplay was prevented
            // Show a play button to the user, or handle the failure gracefully
        });
    });

    video.onended = function () {
        // Optional: Redirect or perform an action after the video ends
    };
});
