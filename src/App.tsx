import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import LoginPage from "@/pages/Login";
import SignUpPage from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen text-white bg-black overflow-hidden">
        <Header />
        <main className="grow overflow-auto">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
