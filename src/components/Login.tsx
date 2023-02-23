//sleuthing (should not be in prod)
// let ip = await fetch('https://api.ipify.org/?format=json')
//   .then(results => results.json())
// console.log(ip.ip)
// let data = {
//     ip_: ip.ip
// }

// fetch('https://tripify-backend.onrender.com/getip', {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers:{
//         'Content-Type': 'application/json'
//     }
// })


export default function Login() {

    return (
        <div class="buttonbox">
            <form action = "https://tripify-backend.onrender.com/login">
                <button type="submit">Plan your trip</button>
            </form>
        </div>
    )
}
