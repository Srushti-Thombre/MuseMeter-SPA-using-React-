import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/organisms";
import { Home } from "./pages/Home";
import { AddEntry } from "./pages/AddEntry";
import { ViewEntries } from "./pages/ViewEntries";

export function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEntry />} />
          <Route path="/view" element={<ViewEntries />} />
        </Routes>
      </div>
    </>
  );
}
