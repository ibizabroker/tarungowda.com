import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"

export default function Navbar() {
  return (
    <nav className="p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-2xl font-semibold text-white grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="text-white/90 no-underline hover:text-white">Tarun Gowda</Link>
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}