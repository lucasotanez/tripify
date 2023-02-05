import { createCanvas, loadImage } from 'canvas'
import { onMount, createSignal } from 'solid-js';

type Props = {
    artists: string[]
}

export default function ImageLoader(props: Props) {

    const [buffer, setBuffer] = createSignal('')
    //const mbApi = new MusicBrainzApi({
    //    appName: 'tripify',
    //    appVersion: '0.1.0',
    //    appContactInfo: 'ribru17@gmail.com'
    //})

    onMount(async () => {

    const width = 600;
    const height = 750;
    console.log("WORKING")
    let post = {
        tripName: "Music Trip",
        // artists: ["Ice Spice", "Drain Gang", "Drake", "Yeat", "Pink Floyd"],
        artists: props.artists,
        width: 600,
        height: 750,
    };

    //const query = 'Pink Floyd'
    //console.log(tags)

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
        //console.log(res.artists[0]['begin-area'].name)
        artistLocations.push(res.artists[0]['begin-area'].name)
        let tags = res.artists[0].tags
        tags.sort((a: any, b: any) => {
            return b.count - a.count
        })
        artistGenres.push(tags)
    }
    console.log(artistLocations)
    console.log(artistGenres)

    const canvas = createCanvas(post.width, post.height);
    const context = canvas.getContext("2d");

    context.fillStyle = "#0f83d6";
    context.fillRect(0, 0, width, height);

    // Set the style of the test and render it to the canvas
    context.font = "bold 40pt 'Ubuntu'";
    context.textAlign = "center";
    // 600 is the x value (the center of the image)
    // 170 is the y (the top of the line of text)
    context.fillStyle = "#000";
    context.fillText(post.tripName, 300, 125);
    context.textAlign = "left";
    context.font = "bold 20pt 'Ubuntu'";
    context.fillStyle = "#fff";
    context.fillText("1. " + post.artists[0], 60, 300);
    context.fillText("2. " + post.artists[1], 60, 375);
    context.fillText("3. " + post.artists[2], 60, 450);
    context.fillText("4. " + post.artists[3], 60, 525);
    context.fillText("5. " + post.artists[4], 60, 600);

    let image = await loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/White_plane_icon_2.png/600px-White_plane_icon_2.png", {crossOrigin: "anonymous"});

    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/White_plane_icon_2.png/600px-White_plane_icon_2.png"
    context.drawImage(image, 400, 175, 50, 50);

    //const buffer = canvas.toBuffer("image/png");
    const buffer1: string = canvas.toDataURL('image/png')
    console.log(buffer1)
    setBuffer(buffer1)
    //fs.writeFileSync("./src/components/image.png", buffer);
    })


return (
    <div>
        <img src={buffer()} />
    </div>
)
}
