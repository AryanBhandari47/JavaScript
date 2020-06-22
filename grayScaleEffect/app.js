var imgcanvas = document.getElementById('cvs');
var image;

function upload() {
    image = new SimpleImage(fileInput);
    image.drawTo(imgcanvas);
}

function makeGray() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen()) / 3;
        pixel.setRed(avg);
        pixel.setBlue(avg);
        pixel.setGreen(avg);

    }


    image.drawTo(imgcanvas);
}