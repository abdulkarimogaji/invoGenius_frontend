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

type Filters = {
  customer_id: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
};

type Pagination = {
  page: string | null;
  size: string | null;
};

async function fetchCustomers({ queryKey }: { queryKey: any }) {
  const filtersStr = new URLSearchParams(queryKey[1]).toString();
  const sdk = new InvoSDK();
  const response: ResponseType = await sdk.callRawAPI(`/v1/api/customers?${filtersStr}`, "GET", undefined);
  return response;
}

export default function useCustomers(filters: Filters, pagination: Pagination) {
  const result = useQuery({ queryKey: ["customers", filters, pagination], queryFn: fetchCustomers, throwOnError: true });

  return { customers: result.data?.customers ?? [], defaultCurrency: result.data?.default_currency };
}
