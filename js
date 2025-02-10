// Function that triggers when "No" is clicked
function noClicked() {
    // Display a sad message with animation
    alert("Oh no! You don't want to be my Valentine? 😢");

    // Animate the "No" button (fade it out with animation)
    const noButton = document.getElementById('noButton');
    noButton.style.animation = 'fadeOut 1s forwards';

    // After animation, hide the button
    setTimeout(() => {
        noButton.classList.add('hidden');
    }, 1000); // 1 second delay to match fadeOut duration
}

// Function that triggers when "Yes" is clicked
function yesClicked() {
    // Display a happy message with animation
    alert("Yay! You are my Valentine! ❤️");

    // Animate both buttons (fade them out with animation)
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // Fade out both buttons simultaneously
    yesButton.style.animation = 'fadeOut 1s forwards';
    noButton.style.animation = 'fadeOut 1s forwards';

    // After animation, hide both buttons
    setTimeout(() => {
        yesButton.classList.add('hidden');
        noButton.classList.add('hidden');
    }, 1000); // 1 second delay to match fadeOut duration

    // Add floating hearts and flowers to the screen
    floatHeartsAndFlowers();
}

// Function to create floating hearts and flowers
function floatHeartsAndFlowers() {
    const container = document.getElementById('floating-items');

    // Create hearts and flowers
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '❤️';
            heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            container.appendChild(heart);

            // Remove the heart after animation
            setTimeout(() => {
                heart.remove();
            }, 3000); // Matches the animation duration
        }, i * 200); // Stagger the hearts' floating start time

        setTimeout(() => {
            const flower = document.createElement('div');
            flower.classList.add('floating-flower');
            flower.innerHTML = '🌸';
            flower.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            container.appendChild(flower);

            // Remove the flower after animation
            setTimeout(() => {
                flower.remove();
            }, 3000); // Matches the animation duration
        }, i * 250); // Stagger the flowers' floating start time
    }
}
