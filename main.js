let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to show the current image
function showImage(index) {
    // Hide all images
    images.forEach(image => {
        image.style.display = 'none';
    });

    // Show the image at the specified index
    images[index].style.display = 'block';
}

// Show the first image initially
showImage(currentIndex);

// Function to show the next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Wrap around to the first image
    }
    showImage(currentIndex);
}

// Function to show the previous image
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Wrap around to the last image
    }
    showImage(currentIndex);
}

// Event listeners for the next and previous buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
