function extractVideoId(url) {
    // Regex to find the 11-character YouTube video ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function loadVideo() {
    const url = document.getElementById('videoLink').value;
    const videoId = extractVideoId(url);
    const container = document.getElementById('playerContainer');
    
    if (videoId) {
        // Embed parameters hide related videos (rel=0) and some player branding
        container.innerHTML = `
            <iframe 
                src="https://youtube.com{videoId}?rel=0&modestbranding=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>`;
    } else {
        alert("Please enter a valid YouTube URL.");
    }
}
