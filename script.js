// constants
const BACKGROUND_COLOR = "#6e6e6e"; // hex color code
const IMAGE_COLOR = "#5e5e5e"; // hex color code
const ROTATION = 45; // degrees

const canvas = document.getElementById("background-image");
const ctx = canvas.getContext("2d");

// image stuff
let image = new Image();

image.src = "image.png";

// functions
const hexToRgb = (color) => {
    const values = [];

    for (let index = 1; index < color.length; index += 2) {
        values.push(parseInt(color.slice(index, index + 2), 16));
    }

    return values;
};

const colorImage = (image, color) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    const rgb = hexToRgb(color);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < data.data.length; i += 4) {
        data.data[i] = rgb[0];
        data.data[i + 1] = rgb[1];
        data.data[i + 2] = rgb[2];
    }

    ctx.putImageData(data, 0, 0);

    return canvas;
};

const main = () => {
    // debugging constants just in case they are inaccessible
    console.log("Background color: " + BACKGROUND_COLOR);
    console.log("Image color: " + IMAGE_COLOR);
    console.log("Rotation: " + ROTATION);

    // fill background
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // get image dimensions
    const imageWidth = Math.floor(image.width / 1.2);
    const imageHeight = Math.floor(image.height * 2);

    let rows = canvas.width / imageWidth;
    let columns = canvas.height / imageHeight;
    
    // change color of image
    image = colorImage(image, IMAGE_COLOR);

    // draw image
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            ctx.save();

            console.log("X: " + (x * imageWidth) + ", Y: " + (y * imageHeight));
            console.log("Row: " + x + ", Column: " + y);

            ctx.translate(x * imageWidth, y * imageHeight);
            ctx.rotate((ROTATION * Math.PI) / 180);

            ctx.drawImage(image, 0, 0);

            ctx.restore();
        }
    }

    // redirect to image
    window.location = canvas.toDataURL("image/png");
};

// event listeners
image.onload = main;