import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Compiler } from "./pages/Compiler";
import { NotFound } from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <Toaster />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
