window.addEventListener("load", manipulateImage, false);

/*function drawImageToCanvas() {
    let canvas = document.getElementById("demo6");
    let context = canvas.getContext("2d");
    let image = document.getElementById("myImageElem");
    context.drawImage(image, 68, 68);
    let imageData = context.getImageData(0,0,1,1);
    let pixelData = imageData.data;
    console.log(pixelData.length);
}*/

function manipulateImage() {
    let canvas = document.getElementById("demo7");
    let context = canvas.getContext("2d");
    let image = document.getElementById("myImageElem");
    context.drawImage(image, 68, 68);
    let imageData = context.getImageData(0,0,200,200);
    let red, green, blue;

    for(let i = 0; i < imageData.data.length; i += 4) {
        red = imageData.data[i];
        green = imageData.data[i+1];
        blue = imageData.data[i+2];

        let greyscale = red * 0.3 + green * 0.59 + blue * 0.11;

        imageData.data[i] = greyscale;
        imageData.data[i+1] = greyscale;
        imageData.data[i+2] = greyscale;
    }
    context.putImageData(imageData, 0, 0);
}