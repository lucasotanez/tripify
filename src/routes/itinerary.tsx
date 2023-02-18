import { useSearchParams } from "solid-start";
import Image from "~/components/ImageLoader";

export default function Itinerary() {

    const [searchParams, setSearchParams] = useSearchParams<any>()

    return (
        <main>
            <h1>Have a nice flight!</h1>
            <Image artists={JSON.parse(JSON.stringify({...searchParams}.info)).slice(2, -2).split('","')} />
        </main>
    )
}
