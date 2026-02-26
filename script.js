// This JavaScript file handles the functionality of the Mini Music Player Web App.
// - Selects DOM elements for manipulation.
// - Adds event listeners for buttons and audio events.
// - Manages state for playback (loaded file, playing/paused).
// - Updates UI dynamically (button text, progress bar).

// Select DOM elements once for efficiency.
const fileInput = document.getElementById('fileInput'); // File input element.
const loadButton = document.getElementById('loadButton'); // Load button.
const audioPlayer = document.getElementById('audioPlayer'); // Audio element.
const playButton = document.getElementById('playButton'); // Play/Restart button.
const pauseButton = document.getElementById('pauseButton'); // Pause/Resume button.
const stopButton = document.getElementById('stopButton'); // Stop button.
const progressBar = document.getElementById('progressBar'); // Progress bar.

// State variables.
let isPlaying = false; // Tracks if audio is currently playing (not paused).
let audioLoaded = false; // Tracks if an audio file is loaded.

// Event listener for load button: Triggers file input click.
loadButton.addEventListener('click', () => {
    fileInput.click(); // Simulates click on hidden file input.
});

// Event listener for file input change: Loads selected file into audio element.
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Gets the selected file.
    if (file) { // Proceed only if a file is selected.
        const fileURL = URL.createObjectURL(file); // Creates a local URL for the file.
        audioPlayer.src = fileURL; // Sets audio source.
        audioLoaded = true; // Update state.
        playButton.textContent = '▶️ Play'; // Reset play button text.
        console.log('Loaded:', file.name); // Debug log.
    }
});

// Event listener for play button: Plays or restarts audio.
playButton.addEventListener('click', () => {
    if (!audioLoaded) return; // Do nothing if no file loaded.
    audioPlayer.currentTime = 0; // Reset to start for restart.
    audioPlayer.play() // Start playback.
        .then(() => {
            isPlaying = true; // Update state.
            playButton.textContent = '🔄 Restart'; // Change to restart mode.
            pauseButton.textContent = '⏸️ Pause'; // Ensure pause text.
        })
        .catch(error => console.error('Playback error:', error)); // Handle errors (e.g., format issues).
});

// Event listener for pause button: Toggles pause/resume.
pauseButton.addEventListener('click', () => {
    if (!audioLoaded) return; // Do nothing if no file loaded.
    if (isPlaying) {
        audioPlayer.pause(); // Pause playback.
        isPlaying = false; // Update state.
        pauseButton.textContent = '▶️ Resume'; // Change text to resume.
    } else {
        audioPlayer.play(); // Resume playback.
        isPlaying = true; // Update state.
        pauseButton.textContent = '⏸️ Pause'; // Change text to pause.
    }
});

// Event listener for stop button: Stops and resets.
stopButton.addEventListener('click', () => {
    if (!audioLoaded) return; // Do nothing if no file loaded.
    audioPlayer.pause(); // Pause first.
    audioPlayer.currentTime = 0; // Reset time to 0.
    isPlaying = false; // Update state.
    pauseButton.textContent = '⏸️ Pause'; // Reset pause text.
    playButton.textContent = '▶️ Play'; // Reset play text.
    progressBar.value = 0; // Reset progress bar.
});

// Event listener for audio time update: Updates progress bar.
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) { // Avoid NaN if duration unknown.
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100; // Calculate percentage.
        progressBar.value = progress; // Update bar value.
    }
});

// Event listener for audio end: Resets states when track finishes.
audioPlayer.addEventListener('ended', () => {
    isPlaying = false; // Update state.
    playButton.textContent = '▶️ Play'; // Reset to play.
    pauseButton.textContent = '⏸️ Pause'; // Reset pause.
    progressBar.value = 0; // Reset progress.
});