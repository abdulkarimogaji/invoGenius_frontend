import InvoSDK from "@/utils/InvoSDK";
import { UserStatusType } from "@/utils/mappings";
import { useQuery } from "@tanstack/react-query";

type Customer = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  status: UserStatusType;
  created_at: string;
  number_of_invoices: number;
  total_billed: number;
  total_collected: number;
  photo: string | null;
  currency: string;
};

type ResponseType = {
  error: boolean;
  message: string;
  customers: Customer[];
  default_currency: string;
};

async function fetchCustomers({ queryKey }: { queryKey: string[] }) {
  // TODO: use filters from the query key
  console.log("log", queryKey);
  const sdk = new InvoSDK();
  const response: ResponseType = await sdk.callRawAPI(`/v1/api/customers`, "GET", undefined);
  return response;
}

export default function useCustomers() {
  const result = useQuery({ queryKey: ["customers"], queryFn: fetchCustomers, throwOnError: true });

  return { customers: result.data?.customers ?? [], defaultCurrency: result.data?.default_currency };
}
