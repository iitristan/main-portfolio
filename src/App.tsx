import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { Analytics } from "@vercel/analytics/react"
import Layout from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
