import PlantBasedButton from "./ui/leaf";
import Link from "next/link";
export const HeroBanner = () => {
  return (
    <section className="w-full h-125 lg:h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">
          Fresh. Homemade. Full of Flavor.
        </h2>
        <p className="font-semibold text-lg md:text-xl lg:text-2xl text-center mt-4 md:mt-6 text-muted-foreground">
          Your go-to spot for lemon tea, fresh lemonades & strong coffee
        </p>
        <div className="flex gap-4 justify-center mt-32">
          <Link href="/menu">
            <PlantBasedButton />
          </Link>
        </div>
      </div>
    </section>
  );
};
