import Link from "next/link";
import { ModeToggle } from "./ui/toogleButton";
import Image from "next/image";
export const Navbar = () => {
  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-2">
        <div className="flex items-center gap-3">

          <Link href="/">
            {" "}
            <Image
              src="/cafelogo.png"
              alt="Lemonade Cafe"
              width={1000}
              height={555}
              className="h-13 w-auto"
              quality={100}
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
