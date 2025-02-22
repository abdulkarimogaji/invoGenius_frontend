import { Route, Routes } from "react-router";
import { useAuthContext } from "./context/auth";
import LoginPage from "./pages/Auth/LoginPage";

function renderSidebar(role: string) {
  switch (role) {
    case "customer":
      return null;
    case "staff":
      return null;

    default:
      return null;
  }
}

function renderRoutes(role: string) {
  switch (role) {
    case "customer":
      return (
        <Routes>
          <Route
            path="*"
            element={null}
          />
        </Routes>
      );
    case "staff":
      return (
        <Routes>
          <Route
            path="*"
            element={null}
          />
        </Routes>
      );

    default:
      return (
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="*"
            element={null}
          />
        </Routes>
      );
  }
}

function Main() {
  const authState = useAuthContext();

  return (
    <div>
      {authState ? renderSidebar(authState.role) : null}
      <div>{!authState?.isAuthenticated ? renderRoutes("none") : renderRoutes(authState.role)}</div>
    </div>
  );
}

export default Main;
