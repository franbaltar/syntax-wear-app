import { Link } from "@tanstack/react-router";

const menus = [
  { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Outlet", items: ["Masculino", "Feminino"] },
  { title: "Sobre", items: ["Quem Somos"] },
];

export const MenuItems = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      {menus.map(({ title, items }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4 items-center">
            <li>
              <p className="font-normal text-surface-alt text-[25px] underline">
                {title}
              </p>
            </li>
            {items.map((item) => (
              <li key={item}>
                {item === "Quem Somos" ? (
                  <Link
                    to="/about"
                    className="font-medium hover:text-accent transition-colors text-xl"
                  >
                    {item}
                  </Link>
                ) : (title === "Masculino" || title === "Feminino") &&
                  item === "Casual" ? (
                  <Link
                    to="/products/category/$category"
                    params={{ category: "casual" }}
                    className="font-medium hover:text-accent transition-colors text-xl"
                  >
                    {item}
                  </Link>
                ) : (title === "Masculino" || title === "Feminino") &&
                  item === "Esporte" ? (
                  <Link
                    to="/products/category/$category"
                    params={{ category: "esporte" }}
                    className="font-medium hover:text-accent transition-colors text-xl"
                  >
                    {item}
                  </Link>
                ) : (title === "Masculino" || title === "Feminino") &&
                  item === "Moderno" ? (
                  <Link
                    to="/products/category/$category"
                    params={{ category: "moderno" }}
                    className="font-medium hover:text-accent transition-colors text-xl"
                  >
                    {item}
                  </Link>
                ) : (title === "Masculino" || title === "Feminino") &&
                  item === "Futurista" ? (
                  <Link
                    to="/products/category/$category"
                    params={{ category: "futurista" }}
                    className="font-medium hover:text-accent transition-colors text-xl"
                  >
                    {item}
                  </Link>
                ) : title === "Outlet" && item === "Masculino" ? (
                  <Link
                    to="/products/category/$category"
                    params={{ category: "masculino" }}
                    className="font-medium hover:text-accent transition-colors text-xl"
                  >
                    {item}
                  </Link>
                ) : title === "Outlet" && item === "Feminino" ? (
                  <Link
                    to="/products/category/$category"
                    params={{ category: "feminino" }}
                    className="font-medium hover:text-accent transition-colors text-xl"
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    className="font-medium hover:text-accent transition-colors text-xl"
                    href="#"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
