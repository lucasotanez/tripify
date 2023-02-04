import { Title } from "solid-start";
import Login from "../components/Login"



export default function Home() {

  return (
    <main>
      <Title>Tripify</Title>
      <p>Welcome to Tripify</p>
      <form>
        <input type="text" placeholder="Enter "/>
      </form>
      <Login />
    </main>
  );
}
