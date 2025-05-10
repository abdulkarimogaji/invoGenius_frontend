import { PlusCircleIcon, Share05Icon } from "@/components/Icons";
import { STATUSES } from "./statuses";
import useCustomers from "./useCustomers";
import moment from "moment";

export default function StaffCustomersPage() {
  const { customers, defaultCurrency } = useCustomers();

  return (
    <div className="bg-primary-50 h-screen p-6">
      <div className="rounded-lg border border-gray-200 bg-white">
        <header className="flex items-center justify-between">
          <h2 className="rounded-t-lg px-5 py-3 text-lg font-semibold text-gray-900">Customers</h2>
        </header>
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div
              className="flex cursor-pointer items-center gap-1 rounded-3xl border border-gray-200 px-1 py-0.5 text-xs font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              role="button"
            >
              <PlusCircleIcon className="h-3 w-3" />
              Customer ID
            </div>{" "}
            <div
              className="flex cursor-pointer items-center gap-1 rounded-3xl border border-gray-200 px-1 py-0.5 text-xs font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              role="button"
            >
              <PlusCircleIcon className="h-3 w-3" />
              First Name
            </div>
            <div
              className="flex cursor-pointer items-center gap-1 rounded-3xl border border-gray-200 px-1 py-0.5 text-xs font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              role="button"
            >
              <PlusCircleIcon className="h-3 w-3" />
              Last Name
            </div>
            <div
              className="flex cursor-pointer items-center gap-1 rounded-3xl border border-gray-200 px-1 py-0.5 text-xs font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              role="button"
            >
              <PlusCircleIcon className="h-3 w-3" />
              Email
            </div>
            <div
              className="flex cursor-pointer items-center gap-1 rounded-3xl border border-gray-200 px-1 py-0.5 text-xs font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              role="button"
            >
              <PlusCircleIcon className="h-3 w-3" />
              Phone
            </div>
          </div>
          <button className="flex cursor-pointer items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50">
            <Share05Icon className="h-4 w-4" /> Export
          </button>
        </div>
        <div>
          <div className="grid grid-cols-[minmax(200px,2fr)_minmax(300px,3fr)_minmax(200px,2fr)_minmax(150px,1.5fr)_minmax(150px,1.5fr)_minmax(152px,1fr)] items-center border-y border-gray-200">
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Created Date</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Details</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Number of Invoices</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Total Billed</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Total Collected</div>
            <div className={`flex cursor-pointer items-center gap-1 py-3 pl-6 text-left text-xs font-medium tracking-wider text-gray-600`}>Status</div>
          </div>
          <div className="bg-white text-sm font-medium text-gray-700">
            {customers.map((customer) => {
              return (
                <div
                  className={""}
                  key={customer.id}
                >
                  <div className={`grid h-18 grid-cols-[minmax(140px,2fr)_minmax(300px,3fr)_minmax(200px,2fr)_minmax(150px,1.5fr)_minmax(150px,1.5fr)_minmax(152px,1fr)] items-center`}>
                    <div className={`relative flex h-full pl-6 whitespace-nowrap`}>
                      <div className="flex h-18 items-center gap-x-2">
                        <div className="">
                          <span className={`block text-sm`}>15 days ago</span>

                          {true ? <span className={`mt-1 text-xs font-normal`}>{moment(customer.created_at).format("DD[th] MMMM [at] hh:mma")}</span> : null}
                        </div>
                      </div>
                    </div>

                    <div className="flex h-18 pl-6 whitespace-nowrap">
                      <div className="flex items-center gap-3 font-medium text-gray-900">
                        <img
                          src={customer.photo ?? "/default.png"}
                          className="rounded-circle h-10 w-10 border border-gray-200 object-cover"
                        />
                        <div className={`flex flex-col`}>
                          <div className="flex items-center gap-x-2">
                            <span className="block max-w-40 truncate text-sm font-medium min-[1980px]:max-w-full">
                              {customer.first_name} {customer.last_name}
                            </span>
                          </div>
                          <span className={`text-sm font-normal`}>{customer.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-18 py-6 pl-6 whitespace-nowrap">
                      <div className={`flex h-full items-center gap-2`}>
                        <div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{customer.number_of_invoices}</span>
                            <span className="text-primary-500 text-xs font-medium">Download All</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`flex h-18 flex-col justify-center pl-6 font-normal`}>
                      {customer.total_billed.toLocaleString("en-US", { style: "currency", currency: customer.currency || defaultCurrency, minimumFractionDigits: 2 })}
                    </div>

                    <div className="flex h-18 py-6 pl-6 font-normal whitespace-nowrap">
                      {customer.total_collected.toLocaleString("en-US", { style: "currency", currency: customer.currency || defaultCurrency, minimumFractionDigits: 2 })}
                    </div>

                    <div className="flex h-18 items-center px-6 text-black">
                      <div className="flex w-full items-center justify-between gap-x-2">{STATUSES[customer.status]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
