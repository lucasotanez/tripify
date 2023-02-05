import { Title } from "solid-start";
import { createSignal, createEffect, For } from "solid-js";
import { useSearchParams } from "solid-start";
import { onMount } from "solid-js";
import { redirect } from "solid-start/server";
import Image from "~/components/ImageLoader";
//import * as dotenv from 'dotenv'

export default function Itinerary() {

    const [searchParams, setSearchParams] = useSearchParams<any>()
        onMount(() => {
            redirect('http://localhost:3000/info?=' + JSON.stringify(searchParams))
            console.log("hi")
                })

    return (
        <main>
            <h1>Have a nice flight!</h1>
            
            {/* <For each={JSON.parse(JSON.stringify({...searchParams}.info)).slice(2, -2).split('","')}>{(item, i) => 
                <p>{item}</p>
            }</For> */}
            
            <Image artists={JSON.parse(JSON.stringify({...searchParams}.info)).slice(2, -2).split('","')} />
        </main>
    )
}
