import { createCanvas, loadImage } from 'canvas'
import { onMount, createSignal } from 'solid-js';

type Props = {
    artists: string[]
}

export default function ImageLoader(props: Props) {

    const [buffer, setBuffer] = createSignal('')

    onMount(async () => {

    const width = 600;
    const height = 750;
    console.log("WORKING")
    let post = {
        tripName: "Your Concert Tour:",
        artists: props.artists,
        width: 600,
        height: 750,
        pallete: [["#B9D6F2", "#061A40", "#0353A4"], ["#5D576B", "#F7567C", "#99E1D9"], 
        ["#CCC9DC", "#1B2A41", "#324A5F"], ["#EAF4F4", "#6B9080", "#A4C3B2"]]
    };
    // retrieve information about artists

    let colorway = Math.floor(Math.random() * 4);
    let artistLocations: string[] = []
    let artistGenres: {count: number, name: string}[] = []
    for (let i = 0; i < 5; i++) {
        let query = post.artists[i]
        let artist = await fetch(`https://musicbrainz.org/ws/2/artist/?query=${query}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
        let res = await artist.json()
        artistLocations.push(res.artists[0]['begin-area']?.name || 'Unknown')
        let tags = res.artists[0].tags || [];
    }
    console.log(artistLocations)
    console.log(artistGenres)

    const canvas = createCanvas(post.width, post.height);
    const context = canvas.getContext("2d");

    context.fillStyle = post.pallete[colorway][2];
    context.fillRect(0, 0, width, height);

    // Set the style of the test and render it to the canvas
    context.font = "bold 30pt 'Ubuntu'";
    context.textAlign = "center";
    // 600 is the x value (the center of the image)
    // 170 is the y (the top of the line of text)
    context.fillStyle = post.pallete[colorway][0];
    context.fillText(post.tripName, 225, 105);
    context.textAlign = "left";
    context.font = "bold 18pt 'Ubuntu'";

    context.beginPath();
    context.fillStyle = post.pallete[colorway][1];
    context.roundRect(50, 245, 500, 50, 35)
    context.roundRect(50, 320, 500, 50, 35)
    context.roundRect(50, 395, 500, 50, 35)
    context.roundRect(50, 470, 500, 50, 35)
    context.roundRect(50, 545, 500, 50, 35)
    context.fillStyle = post.pallete[colorway][1];
    context.stroke();
    context.fill();

    context.beginPath();
    context.fillStyle = post.pallete[colorway][0];
    context.fillText("1   " + post.artists[0], 70, 280);
    context.fillText("2   " + post.artists[1], 70, 355);
    context.fillText("3   " + post.artists[2], 70, 430);
    context.fillText("4   " + post.artists[3], 70, 505);
    context.fillText("5   " + post.artists[4], 70, 580);

    context.font = "italic 12pt 'Ubuntu'";
    context.textAlign = "right";
    context.fillText(artistLocations[0], 515, 278);
    context.fillText(artistLocations[1], 515, 353);
    context.fillText(artistLocations[2], 515, 428);
    context.fillText(artistLocations[3], 515, 503);
    context.fillText(artistLocations[4], 515, 578);

    let image = await loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/White_plane_icon_2.png/600px-White_plane_icon_2.png", {crossOrigin: "anonymous"});
    context.drawImage(image, 450, 150, 75, 75);

    context.beginPath();
    context.textBaseline = 'middle'
    context.strokeStyle = "white"
    context.roundRect(50, 160, 350, 3, 5)
    context.roundRect(80, 185, 350, 3, 5)
    context.roundRect(50, 210, 350, 3, 5)
    context.fillStyle = "white"
    context.stroke();

    let image2 = await loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/White_plane_icon_2.png/600px-White_plane_icon_2.png", {crossOrigin: "anonymous"});
    context.drawImage(image2, 450, 625, 75, 75);

    context.strokeStyle = "white"
    context.roundRect(50, 635, 350, 3, 5)
    context.roundRect(80, 660, 350, 3, 5)
    context.roundRect(50, 685, 350, 3, 5)
    context.fillStyle = "white"
    context.stroke();
    context.fill();

    context.fillStyle = "white";
    context.strokeStyle = post.pallete[colorway][0];
    context.lineWidth = 5;
    context.roundRect(508, 2, 90, 90, [0, 0, 0, 45])
    context.fill()
    context.stroke()

    // get canvas image as base64 string
    const buffer1: string = canvas.toDataURL('image/png')
    setBuffer(buffer1)
    })


return (
    <div>
        <img src={buffer()} />
    </div>
)
}
