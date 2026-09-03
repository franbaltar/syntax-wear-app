import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeTree } from "./router-tree-gen";
import { CartProvider } from "./contexts/CartProvider";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  useEffect(() => {
    const darkMode = localStorage.getItem("dark-mode") === "true";
    document.body.classList.toggle("dark-mode", darkMode);
  }, []);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
