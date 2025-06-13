import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/page";
import { SignUpPage } from "./pages/signup/page";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
