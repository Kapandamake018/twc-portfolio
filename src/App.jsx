import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { Navbar } from "./components/Navbar";
import { ThemeToggle } from "./components/ThemeToggle";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <ThemeToggle />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
