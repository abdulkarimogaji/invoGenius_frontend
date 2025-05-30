import InvoSDK from "@/utils/InvoSDK";
import { useQuery } from "@tanstack/react-query";

type InvoiceSettingType = {
  currency: string;
  deadline_days: number;
  vat: number;
};

type ResponseType = {
  error: boolean;
  message: string;
  result: InvoiceSettingType;
};

async function fetchInvoiceSettings() {
  const sdk = new InvoSDK();
  const response: ResponseType = await sdk.callRawAPI("/v1/api/settings/invoice", "GET", undefined);
  return response;
}

export default function useInvoiceSettings() {
  const result = useQuery({ queryKey: ["customers"], queryFn: fetchInvoiceSettings, throwOnError: true });

  return { settings: result.data?.result };
}
