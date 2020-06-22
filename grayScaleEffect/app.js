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

//Downlaod button 
function download() {

    //for edge 
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(imgcanvas.msToBlob(), "grayscale-Image.pnj")
    } else {

        //for other browser
        const a = document.createElement('a');

        document.body.appendChild(a);
        a.href = imgcanvas.toDataURL();
        a.download = "grayscale-Image.png";
        a.click();
        document.body.removeChild(a);
    }

}