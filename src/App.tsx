import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/page";
import { SignUpPage } from "./pages/signup/page";
import { ProtectedRoute } from "./components/Authentication/ProtectedPage";
import { UserOnlyPage } from "./pages/userOnly/page";
import { SignInPage } from "./pages/signin/page";
import { LeaderboardPage } from "./pages/leaderboard/page";
import { ProfilPage } from "./pages/profile/page";
import { WorkspacePage } from "./pages/workspace/page";
import useThemeStore from "./store/useThemeStore";

export const App = () => {
  const { theme } = useThemeStore();
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
  );
  localStorage.theme = theme;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/workspace/:id" element={<WorkspacePage />} />
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
