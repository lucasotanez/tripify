import { Title } from "solid-start";
import { createSignal, createEffect } from "solid-js";
import { useSearchParams } from "solid-start";
import { onMount } from "solid-js";
import { redirect } from "solid-start/server";
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
            <p>HIllo</p>
            <p>{JSON.stringify(searchParams)}</p>
            <p>{JSON.parse(JSON.parse(JSON.stringify({...searchParams}.info)))}</p>
        </main>
    )
}
