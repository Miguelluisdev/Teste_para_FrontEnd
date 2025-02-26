import Link from "next/link"

export default function Header() {
  return (
    <header className="py-4 px-6 backdrop-blur shadow-sm" role="banner">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-4xl text-[#00B5EA] hover:text-[#3722BA]/80 transition-colors duration-300 ease-out font-bold"
          aria-label="Página inicial da Logitech"
        >
          <span aria-hidden="true">Logitech</span>
        </Link>
        <nav
          className="hidden md:flex space-x-6"
          aria-label="Navegação principal"
        >
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/products"
                className="nav-link"
                aria-label="Ir para os produtos"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="nav-link"
                aria-label="Conheça nossa empresa"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                href="/suporte"
                className="nav-link"
                aria-label="Contate nosso suporte"
              >
                Suporte
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
