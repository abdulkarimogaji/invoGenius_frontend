import { BrowserRouter } from "react-router";
import Main from "./main";
import AuthProvider from "./context/auth";
import SessionProvider from "./providers/SessionProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <SessionProvider>
          <Main />
        </SessionProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
