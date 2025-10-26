import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardPage } from "@/pages/DashboardPage";
import { AulasPage } from "@/pages/AulasPage";
import { RankingPage } from "@/pages/RankingPage";
import { ComunidadePage } from "@/pages/ComunidadePage";
import "@/styles/globals.css";

const router = createBrowserRouter(
  [
    { path: "/", element: <DashboardPage /> },
    { path: "/dashboard", element: <DashboardPage /> },
    { path: "/aulas", element: <AulasPage /> },
    { path: "/ranking", element: <RankingPage /> },
    { path: "/comunidade", element: <ComunidadePage /> },
    // Outras rotas serão adicionadas posteriormente
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

function App() {
  return (
    <div className="min-h-screen">
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true }}
      />
    </div>
  );
}

export default App;
