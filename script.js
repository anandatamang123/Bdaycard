document.addEventListener('DOMContentLoaded', () => {
    const fontButton = document.getElementById('fontButton');
    const bgButton = document.getElementById('bgButton');
    const quoteButton = document.getElementById('quoteButton');
    const modalButton = document.getElementById('modalButton');
    const modal = document.getElementById('modal');
    const span = document.getElementsByClassName('close')[0];

    // Change Font Style
    fontButton.addEventListener('click', () => {
        document.body.style.fontFamily = document.body.style.fontFamily === 'Arial' ? 'Courier New' : 'Arial';
    });

    // Change Background Color
    bgButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Generate Quote
    quoteButton.addEventListener('click', () => {
        const quotes = [
            "The mind is everything. What you think you become.",
            "Peace comes from within. Do not seek it without.",
            "The only real failure in life is not to be true to the best one knows."
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quoteDisplay').innerText = randomQuote;
    });

    // Modal Popup
    modalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    span.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Countdown Timer
    const countdown = document.getElementById('countdown');
    const eventDate = new Date('May 21, 2024 00:00:00').getTime();

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

        if (distance < 0) {
            clearInterval(updateCountdown);
            countdown.innerHTML = "HAPPY BIRTHDAY!";
        }
    }, 1000);

    // Helper function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
