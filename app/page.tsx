import Link from "next/link";
import Hero from "./components/Home/Hero";
import Welcome from "./components/Home/Welcome";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Welcome />
    </main>
  );
}
