import Navbar from "../components/Navbar";
import Link from "next/link"; 

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Welcome to Study Planner</h1>
        <p>Organize your tasks and stay productive.</p>

        <p style={{ marginTop: "10px", maxWidth: "500px" }}>
        Stay on top of your assignments, track your progress, and boost your productivity with ease.
        </p>

        <Link href="/tasks">
         <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}