import { ModeToggle } from "@/components/ui/toogleButton";
import { HeroBanner } from "@/components/heroBanner";
export default function Home() {
  return (
    <div className="m-0 p-0">
      <main className="">
        <ModeToggle />
        <h1>WELCOME</h1>
        <HeroBanner />
      </main>
    </div>
  );
}
