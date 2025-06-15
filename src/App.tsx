import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/page";
import { SignUpPage } from "./pages/signup/page";
import { ProtectedRoute } from "./components/ProtectedPage";
import { UserOnlyPage } from "./pages/userOnly/page";
import { SignInPage } from "./pages/signin/page";
import { LeaderboardPage } from "./pages/leaderboard/page";
import { ProfilPage } from "./pages/profil/ProfilPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/profil/:userId" element={<ProfilPage />} />
        <Route
          path="/useronly"
          element={
            <ProtectedRoute>
              <UserOnlyPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};