import { ModeToggle } from "./ui/toogleButton";

export const Navbar = () => {
  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-2">
        <div className="flex items-center gap-3">
          {/*<img src="/logo-c.png" alt="Lemonade Cafe" className="h-13" />*/}
          <h4 className="text-xl font-black">Lemonade Cafe</h4>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
