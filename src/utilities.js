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