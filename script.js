const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const container = document.getElementById('container');

// Event listener for the "No" button
noButton.addEventListener('mouseover', () => {
    // Get the dimensions of the container and the button
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    // Calculate a new random position within the container bounds
    const newX = Math.random() * (containerRect.width - noButtonRect.width);
    const newY = Math.random() * (containerRect.height - noButtonRect.height);

    // Apply the new position
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});

// Event listener for the "Yes" button
yesButton.addEventListener('click', () => {
    // Change the text and image, and hide buttons
    container.innerHTML = `
        <h1 class="header_text">Thanks for being my valentines bb 😍🥹❤️🥰! You have made the best choice🫰🫶🏻  ILU BB 💙
 </h1>
        <div class="gif_container">
            <img src="./images/person-Image.jpg" alt="Cute animated illustration">
        </div>
    `;
});
