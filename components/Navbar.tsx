// app/components/Navbar.tsx

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full px-10 py-6 flex justify-between items-center z-10">
      <h2 className="text-2xl font-bold tracking-wider">CORALYNN</h2>

      <div className="flex gap-8 text-lg">
        <a href="#shop" className="hover:opacity-70 transition">
          Shop
        </a>
        <a href="#about" className="hover:opacity-70 transition">
          About
        </a>
        <a href="#contact" className="hover:opacity-70 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
