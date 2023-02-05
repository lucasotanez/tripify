import { createCanvas, loadImage } from 'canvas'
// import Google from './google.png'

type Props = {
    artists: string[]
}

export default function ImageLoader(props: Props) {

const width = 600;
const height = 750;

let post = {
   tripName: "Music Trip",
   // artists: ["Ice Spice", "Drain Gang", "Drake", "Yeat", "Pink Floyd"],
   artists: props.artists,
   width: 600,
   height: 750,
};

const canvas = createCanvas(post.width, post.height);
const context = canvas.getContext("2d");

context.fillStyle = "#0f83d6";
context.fillRect(0, 0, width, height);

// Set the style of the test and render it to the canvas
context.font = "bold 40pt 'PT Sans'";
context.textAlign = "center";
// 600 is the x value (the center of the image)
// 170 is the y (the top of the line of text)
context.fillStyle = "#000";
context.fillText(post.tripName, 300, 125);
context.textAlign = "left";
context.font = "bold 25pt 'PT Sans'";
context.fillStyle = "#fff";
context.fillText("1. " + post.artists[0], 60, 250);
context.fillText("2. " + post.artists[1], 60, 350);
context.fillText("3. " + post.artists[2], 60, 450);
context.fillText("4. " + post.artists[3], 60, 550);
context.fillText("5. " + post.artists[4], 60, 650);


loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png").then((image) => {
    context.drawImage(image, 200, 200, 100, 100);
})

//const buffer = canvas.toBuffer("image/png");
const buffer: string = canvas.toDataURL('image/png')
//fs.writeFileSync("./src/components/image.png", buffer);

return (
    <div>
        <img src={`${buffer}`} />
    </div>
)
}