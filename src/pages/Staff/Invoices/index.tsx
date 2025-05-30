import { PlusIcon, Share05Icon } from "@/components/Icons";
import { STATUSES } from "./statuses";
import { useSearchParams } from "react-router";
import useInvoices from "./useInvoices";
import FilterButton from "@/components/FilterButton";
import moment from "moment";
import { useState } from "react";
import CreateInvoiceModal from "./CreateInvoiceModal";

export default function StaffInvoicesPage() {
  const [createInvoice, setCreateInvoice] = useState(false);
  const [searchParams] = useSearchParams();

  const filters = {
    user_id: searchParams.get("user_id"),
    type: searchParams.get("type"),
    status: searchParams.get("status"),
    amount: searchParams.get("amount"),
  };
  const pagination = {
    page: searchParams.get("page"),
    size: searchParams.get("size"),
  };

  const { invoices } = useInvoices(filters, pagination);

  return (
    <div className="bg-primary-50 h-screen p-6">
      <div className="rounded-lg border border-gray-200 bg-white">
        <header className="flex items-center justify-between">
          <h2 className="rounded-t-lg px-5 py-3 text-lg font-semibold text-gray-900">Payments</h2>
        </header>
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <FilterButton
              label="Invoice ID"
              name="invoice_id"
              type="text"
            />
            <FilterButton
              label="Customer"
              name="user_id"
              type="text"
            />
            <FilterButton
              label="Invoice Type"
              name="type"
              type="text"
            />
            <FilterButton
              label="Status"
              name="status"
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-primary-600 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white duration-200 hover:opacity-90 active:opacity-95"
              onClick={() => setCreateInvoice(true)}
            >
              <PlusIcon className="h-5 w-5" /> Create Invoice
            </button>
            <button className="flex cursor-pointer items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50">
              <Share05Icon className="h-4 w-4" /> Export
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-[minmax(200px,2fr)_minmax(300px,3fr)_minmax(200px,2fr)_minmax(150px,1.5fr)_minmax(150px,1.5fr)_minmax(152px,1fr)] items-center border-y border-gray-200">
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Issue Date</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Customer</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Invoice</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Amount</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Received</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Status</div>
          </div>
          <div className="bg-white text-sm font-medium text-gray-700">
            {invoices.map((invoice) => {
              return (
                <div
                  className={""}
                  key={invoice.id}
                >
                  <div className={`grid h-18 grid-cols-[minmax(140px,2fr)_minmax(300px,3fr)_minmax(200px,2fr)_minmax(150px,1.5fr)_minmax(150px,1.5fr)_minmax(152px,1fr)] items-center`}>
                    <div className={`relative flex h-full pl-6 whitespace-nowrap`}>
                      <div className="flex h-18 items-center gap-x-2">
                        <div className="">
                          <span className={`block text-sm`}>{moment(invoice.issued_at).fromNow()}</span>

                          <span className={`mt-1 text-xs font-normal`}>{moment(invoice.issued_at).format("DD[th] MMMM [at] hh:mmA")}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex h-18 pl-6 whitespace-nowrap">
                      <div className="flex items-center gap-3 font-medium text-gray-900">
                        <img
                          src={invoice.photo ?? "/default.png"}
                          className="rounded-circle h-10 w-10 border border-gray-200 object-cover"
                        />
                        <div className={`flex flex-col`}>
                          <div className="flex items-center gap-x-2">
                            <span className="block max-w-40 truncate text-sm font-medium min-[1980px]:max-w-full">
                              {invoice.first_name} {invoice.last_name}
                            </span>
                          </div>
                          <span className={`text-sm font-normal`}>{invoice.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-18 py-6 pl-6 whitespace-nowrap">
                      <div className={`flex h-full items-center gap-2`}>
                        <div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">Tuition September 2022</span>
                            <a
                              className="text-primary-500 text-xs font-medium"
                              target="_blank"
                              href={`/invoices/${invoice.id}`}
                            >
                              #{invoice.id}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`flex h-18 flex-col justify-center pl-6 font-normal`}>
                      {invoice.total_amount.toLocaleString("en-US", { style: "currency", currency: invoice.currency, minimumFractionDigits: 2 })}
                    </div>

                    <div className="flex h-18 py-6 pl-6 font-normal whitespace-nowrap">
                      {invoice.total_amount.toLocaleString("en-US", { style: "currency", currency: invoice.currency, minimumFractionDigits: 2 })}
                    </div>

                    <div className="flex h-18 items-center px-6 text-black">
                      <div className="flex w-full items-center justify-between gap-x-2">{STATUSES["pending"]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CreateInvoiceModal
        isOpen={createInvoice}
        closeModal={() => setCreateInvoice(false)}
      />
    </div>
  );
}
