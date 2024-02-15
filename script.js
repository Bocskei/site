document.addEventListener('DOMContentLoaded', function() {
    const games = document.querySelectorAll('.game');

    games.forEach(game => {
        const image = game.querySelector('img');
        const details = game.querySelector('.game-details');

        image.addEventListener('click', function() {
            details.classList.toggle('show');
        });
    });
});
