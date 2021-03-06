function redirect() {
    if (location.pathname.startsWith("/shorts")) {
        // 0     1       2 
        //   /shorts/abcde123456
        const videoId = location.pathname.split("/")[2];
        const newUrl = "https://www.youtube.com/watch?v=" + videoId;
        window.location.replace(newUrl);
    }
}

// Run it normally once in case a youtube shorts url was opened directly
redirect();

// Use this event so it'll work when navigating inside of youtube.
// Otherwise, people have to refresh the page for it to work.
// Some other events that might work? yt-page-data-updated, yt-page-type-changed, yt-navigate-finish
document.addEventListener("yt-navigate-start", redirect);
