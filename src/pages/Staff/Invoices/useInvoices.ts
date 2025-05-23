import InvoSDK from "@/utils/InvoSDK";
import { InvoiceStatusType } from "@/utils/mappings";
import { useQuery } from "@tanstack/react-query";

type Invoice = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  status: InvoiceStatusType;
  total_amount: number;
  photo: string | null;
  currency: string;
  issued_at: string;
};

type ResponseType = {
  error: boolean;
  message: string;
  invoices: Invoice[];
};

type Filters = {
  user_id: string | null;
  type: string | null;
  status: string | null;
  amount: string | null;
};

type Pagination = {
  page: string | null;
  size: string | null;
};

async function fetchInvoices({ queryKey }: { queryKey: any }) {
  const filtersStr = new URLSearchParams(queryKey[1]).toString();
  const sdk = new InvoSDK();
  const response: ResponseType = await sdk.callRawAPI(`/v1/api/invoices?${filtersStr}`, "GET", undefined);
  return response;
}

export default function useInvoices(filters: Filters, pagination: Pagination) {
  const result = useQuery({ queryKey: ["customers", filters, pagination], queryFn: fetchInvoices, throwOnError: true });

  return { invoices: result.data?.invoices ?? [] };
}
