/****************************** VIDEO ******************************/
function controlVideo() {
  // Grab the video element and save it in a variable for reference
  var demoVideo = document.getElementById("demoVideo");
  // Grab the play/pause element and save it in a variable for reference later
  var pausePlayButton = document.querySelector(".playPauseVideo");

  // demoVideo.addEventListener("canplay", function () {
  //   setTimeout(function () {
  //     demoVideo.play();
  //   }, 1000);
  // });

  // Unnecessary, but you can delay the start with a basic timeout wrapper
  setTimeout(function () {
    // Play the video (finicky browser support requires we play the video this way instead of with 'autoplay')
    demoVideo
      .play()
      .then(function () {
        // once the video is playing, we update the play/pause icon
        pausePlayButton.classList.remove("playPauseVideo--paused");
        pausePlayButton.classList.add("playPauseVideo--playing");
      })
      .catch(function (error) {
        // An error ocurred or the user agent prevented playback.
        //console.log("Error: " + error);
        pausePlayButton.classList.remove("playPauseVideo--playing");
        pausePlayButton.classList.add("playPauseVideo--paused");
      });
  }, 1000);

  // Pause video helper function for convenience
  function pauseVideo() {
    demoVideo.pause();
    pausePlayButton.classList.remove("playPauseVideo--playing");
    pausePlayButton.classList.add("playPauseVideo--paused");
  }

  // Play video helper function for convenience
  function playVideo() {
    demoVideo.play();
    pausePlayButton.classList.remove("playPauseVideo--paused");
    pausePlayButton.classList.add("playPauseVideo--playing");
  }

  // pause video on esc (a little accessibility helper for keyboard users)
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      pauseVideo();
    }
  };

  // If paused, then play on click of play button
  pausePlayButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (pausePlayButton.classList.contains("playPauseVideo--playing")) {
      pauseVideo();
    } else {
      playVideo();
    }
  });
}

// Load 'em
document.addEventListener('DOMContentLoaded', function () {
  controlVideo();
});




