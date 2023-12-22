const cards = document.querySelectorAll(".card");
const random = document.querySelector(".random");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

// random.addEventListener("click", () => {
//     modal.querySelector('.card')?.remove();
//     var random = Math.floor(Math.random() * 38);
//     modal.querySelector('div.centralCard');
//     modal.classList.toggle("inactive");
//     modal.appendChild(cards[random].cloneNode(true));

//     cards.forEach((card) => {
//         card.style.order = Math.floor(Math.random() * 12);
//         card.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
//     });

// });

random.addEventListener("click", () => {
    setTimeout(() => {
        modal.querySelector('.card')?.remove();
        var random = Math.floor(Math.random() * 38);
        // modal.querySelector('div.centralCard');
        modal.classList.toggle("inactive");
        modal.querySelector('div.centralCard').appendChild(cards[random].cloneNode(true));

        cards.forEach((card) => {
            card.style.order = Math.floor(Math.random() * 12);
            card.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        });
    }, 1000);
});

close.addEventListener("click", () => {
    if (!random.classList.contains('inactive')) {
        modal.classList.toggle("inactive");
    }
});