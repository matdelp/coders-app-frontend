import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/page";
import { SignUpPage } from "./pages/signup/page";
import { ProtectedRoute } from "./components/Authentication/ProtectedPage";
import { UserOnlyPage } from "./pages/userOnly/page";
import { SignInPage } from "./pages/signin/page";
import { LeaderboardPage } from "./pages/leaderboard/page";
import { ProfilPage } from "./pages/profile/page";

export const App = () => {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/profile/:userId" element={<ProfilPage />} />
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
