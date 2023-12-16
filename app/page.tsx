import Link from "next/link";
import Hero from "./components/Home/Hero";
import Work from "./components/Home/Work";
import Quality from "./components/Home/Quality";

export default function Home() {
  return (
    <>
      <Hero />
      <Quality />
      <Work />
    </>
  );
}
