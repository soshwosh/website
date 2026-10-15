const bookDropSound = new Audio('./assets/audio/setting-book-down.mp3');
bookDropSound.autoplay = true;

const books = document.querySelectorAll(".book > img");

books.forEach((book) => {
    book.addEventListener('mouseout', () => {
        bookDropSound.currentTime = 0;
        bookDropSound.play();
    })
});