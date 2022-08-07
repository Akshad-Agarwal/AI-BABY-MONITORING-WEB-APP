function setup() {
    canvas = createCanvas(600, 450);
    canvas.position(480,240);
    video = createCapture(VIDEO);
    video.hide();
    video.size(600, 500);

}

function draw() {
    image(video, 0, 0, 600, 500);
}
