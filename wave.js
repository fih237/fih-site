const canvas = document.getElementById("wave-canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "assets/tuff.png";

let t = 0;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

img.onload = () => {
    animate();
};

function animate() {
    t += 0.03;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sliceWidth = 2;
 
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
    } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
    }

    for (let x = 0; x < canvas.width; x += sliceWidth) {

        const wave =
            Math.sin(x * 0.005 + t * 0.5) * 12;

        ctx.drawImage(
            img,

            ((x - offsetX) / drawWidth) * img.width,
            0,
            (sliceWidth / drawWidth) * img.width,
            img.height,

            x,
            offsetY + wave,
            sliceWidth,
            drawHeight
        );
    }

    requestAnimationFrame(animate);
}