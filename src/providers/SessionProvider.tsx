import { useAuthDispatchContext } from "@/context/auth";
import InvoSDK from "@/utils/InvoSDK";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const authDispatch = useAuthDispatchContext();
  const navigate = useNavigate();

  async function verifyToken() {
    try {
      const sdk = new InvoSDK();
      const response = await sdk.callRawAPI("/v1/api/token", "GET", undefined);
      authDispatch({ type: "LOGIN", payload: { role: response.role, token: response.token, user_id: response.user_id } });
    } catch (err) {
      authDispatch({ type: "LOGOUT", payload: { user_id: 0, token: "", role: "" } });
      navigate("/login");
    }
  }

  useEffect(() => {
    verifyToken();
  }, []);

  return children;
}
