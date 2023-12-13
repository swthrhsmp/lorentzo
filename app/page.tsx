import Link from "next/link";
import Hero from "./components/Home/Hero";
import Work from "./components/Home/Work";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Work />
    </main>
  );
}
