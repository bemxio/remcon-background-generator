// imports
const { createCanvas, loadImage } = require("canvas");
const Color = require("color");
const { program } = require("commander");

// functions
const colorImage = (image, color) => {
    // convert image to canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);
    
    // change color of every pixel
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < data.data.length; i += 4) {
        data.data[i] = color.red();
        data.data[i + 1] = color.green();
        data.data[i + 2] = color.blue();
    }

    ctx.putImageData(data, 0, 0);

    return canvas;
};

// command line argument parsing
program.name("remcon-background-generator");
program.description("A background image generator for the Remcon 2023 identificator.\n");
program.helpOption("-h, --help", "Display this help message.");

program.argument("<image>", "The path to an image file used as a pattern.");
program.option("-o, --output [file]", "The path where the final image will be saved.", "background.png");

program.option("-b, --background [color]", "The color of the background, can be any valid CSS value.", "#6e6e6e");
program.option("-c, --color [color]", "The color of the pattern, can be any valid CSS value.", "#5e5e5e");
program.option("-r, --rotation [degrees]", "The rotation of the image pattern, in degrees.", 45);

program.parse();

const args = program.opts();

// retrieving values from arguments
const image = await loadImage(args.image);

const backgroundColor = Color(args.background);
const imageColor = Color(args.color);

const rotation = args.rotation;