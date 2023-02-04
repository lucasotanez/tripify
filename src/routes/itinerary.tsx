import { Title } from "solid-start";
import { useSearchParams, useServerContext, parseCookie } from "solid-start";
import { redirect } from "solid-start/server";
import { isServer } from "solid-js/web"
import { Buffer } from "buffer"
globalThis.Buffer = Buffer
//import * as dotenv from 'dotenv'

export default async function Itinerary() {

    //dotenv.config()
    const [searchParams] = useSearchParams();
    const event = useServerContext()
    const data = {...searchParams}
    const code = data.code
    const state = data.state
    //const client_id = process.env.CLIENT_ID
    //const client_secret = process.env.CLIENT_SECRET
    const client_id = import.meta.env.VITE_CLIENT_ID
    const client_secret = import.meta.env.VITE_CLIENT_SECRET
    const redirect_uri = 'http://localhost:3000/itinerary'
    
    const cookie = () => parseCookie(
        isServer
        ? event.request.headers.get("cookie") ?? ""
        : document.cookie
    )
    //console.log(JSON.stringify(cookie()))
    console.log(cookie().spotify_auth_state)
    if (!state || state !== cookie().spotify_auth_state) {
        redirect('/')
    } else {
        
        const info = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            body: new URLSearchParams({
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'client_credentials'
            })
        }).then(res => res.json())
        console.log("info " + JSON.stringify(info))
        //console.log(info)
        

    }
    /*
    function check_cookie_name(name: string) {
        if (!document) return null
      var match = document?.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) {
        // console.log(match[2]);
        return match[2]
      }
      else{
           // console.log('--something went wrong---');
           return null
      }
    }*/

    //console.log('f ' + check_cookie_name('spotify_auth_state'))

    return (
        <main>
            <Title>Your Flight Itinerary</Title>
            <h1>Have a nice flight!</h1>
        </main>
    )
}
