const bandage = document.getElementById('bandage');
const message = document.getElementById('message');
const bleeding = document.getElementById('bleeding');
const leftPart = document.getElementById('leftPart');
const rightPart = document.getElementById('rightPart');
const backgroundMusic = document.getElementById('backgroundMusic');

let isDragging = false;

bandage.addEventListener('mousedown', function() {
    isDragging = true;
    backgroundMusic.play(); // Play music when dragging starts
});

document.addEventListener('mousemove', function(event) {
    if (isDragging) {
        bandage.style.left = event.clientX - bandage.offsetWidth / 2 + 'px';
        bandage.style.top = event.clientY - bandage.offsetHeight / 2 + 'px';
    }
});

document.addEventListener('mouseup', function() {
    if (isDragging) {
        isDragging = false;
        message.style.display = 'block';
        bleeding.style.display = 'block';
        leftPart.style.transform = 'translateX(-100px)';
        rightPart.style.transform = 'translateX(100px)';
        backgroundMusic.pause(); // Stop music when dragging ends
        backgroundMusic.currentTime = 0; // Reset music to start
    }
});

// Stop music when the page is closed
window.addEventListener('beforeunload', function() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
});