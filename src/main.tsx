import { Route, Routes } from "react-router";
import { useAuthContext } from "./context/auth";
import LoginPage from "./pages/Auth/LoginPage";
import StaffSidebar from "./components/StaffSidebar";
import StaffDashboardPage from "./pages/Staff/Dashboard";
import StaffInvoicesPage from "./pages/Staff/Invoices";
import StaffIntegrationsPage from "./pages/Staff/Integrations";
import StaffCustomersPage from "./pages/Staff/Customers";

function renderSidebar(role: string) {
  switch (role) {
    case "customer":
      return null;
    case "staff":
      return <StaffSidebar />;
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
            path="/dashboard"
            element={<StaffDashboardPage />}
          />
          <Route
            path="/customers"
            element={<StaffCustomersPage />}
          />
          <Route
            path="/invoices"
            element={<StaffInvoicesPage />}
          />
          <Route
            path="/integrations"
            element={<StaffIntegrationsPage />}
          />
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
    <div className="flex">
      {authState?.isAuthenticated ? renderSidebar(authState.role) : null}
      <div className="flex-grow">{!authState?.isAuthenticated ? renderRoutes("none") : renderRoutes(authState.role)}</div>
    </div>
  );
}

export default Main;
