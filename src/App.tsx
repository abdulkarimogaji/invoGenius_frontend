import { BrowserRouter } from "react-router";
import Main from "./main";
import AuthProvider from "./context/auth";
import SessionProvider from "./providers/SessionProvider";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <SessionProvider>
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={({ resetErrorBoundary }) => (
                    <div>
                      There was an error!
                      <button onClick={() => resetErrorBoundary()}>Try again</button>
                    </div>
                  )}
                >
                  <Main />
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </SessionProvider>
        </BrowserRouter>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
