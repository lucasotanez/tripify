let ip = await fetch('https://api.ipify.org/?format=json')
  .then(results => results.json())
//console.log(ip)

fetch('https://tripify-backend.onrender.com' || 8888, {
    method: "POST",
    body: ip,
})

export default function Login() {

    return (
        <div class="buttonbox">
            <form action = "https://tripify-backend.onrender.com/login">
                <button type="submit">Plan your trip</button>
            </form>
        </div>
    )
}
