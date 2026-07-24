import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-trace-dim bg-board/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}
