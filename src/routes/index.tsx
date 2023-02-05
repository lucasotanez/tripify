import { Title } from "solid-start";
import Login from "../components/Login"

export default function Home() {

  return (
    <main>
      <Title>Tripify</Title>
      <h1>Tripify</h1>
      <p>Your musical voyage awaits</p>
      {/* <form>
        <input type="text" placeholder="Enter "/>
      </form> */}
      <Login />
    </main>
  );
}
