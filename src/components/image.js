const { createCanvas, loadImage } = import('canvas');

async function createImage() {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  // Load image
  const image = await loadImage('path/to/image.jpg');

  // Draw image onto canvas
  ctx.drawImage(image, 0, 0, 200, 200);

  // Save the image as a png
  canvas.createPNGStream().pipe(fs.createWriteStream('output.png'));
}

createImage();