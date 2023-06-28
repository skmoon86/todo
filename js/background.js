const images = ["bg0.webp", "bg1.webp"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src =`img/${chosenImage}`

document.body.appendChild(bgimage)