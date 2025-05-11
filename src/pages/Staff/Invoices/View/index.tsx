import { BankNote01Icon, CalendarDateIcon, CheckCircleIcon, CoinsHandIcon, Copy03Icon, DotsVerticalIcon, FileDownload03Icon, FlipBackwardIcon, Trash02Icon } from "@/components/Icons";
import { Field, Input, Label, Menu, MenuButton, MenuItem, MenuItems, Textarea } from "@headlessui/react";
import { useNavigate, useParams } from "react-router";
// import InvoicePreview from "./InvoicePreview";
import InvoiceActivity from "./InvoiceActivity";

export default function StaffViewInvoicePage() {
  const { invoice_id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-primary-50 small-scroll h-screen overflow-y-auto p-6">
      <div>
        <button
          className="cursor-pointer text-base font-bold text-gray-700"
          onClick={() => navigate(-1)}
        >
          {"<-"} Back
        </button>
      </div>
      <div className="mt-2 grid grid-cols-[2.2fr_1fr] gap-6">
        <div className="rounded-t-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between gap-6 rounded-t-xl p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-circle flex h-14 w-14 items-center justify-center bg-green-100">
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="">
                <h2 className="text-lg font-semibold text-gray-900">
                  Invoice <span className="text-primary-600">#{invoice_id}</span>
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-normal">Due on: </span> <span className="font-semibold">31 Sept 2023</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="cursor-pointer rounded-lg border border-gray-300 px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-50">Download Receipt</button>
              <Menu>
                <MenuButton className="cursor-pointer rounded-lg border border-gray-200 bg-gray-50 p-2">
                  <DotsVerticalIcon className="h-5 w-5 text-gray-600" />
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="custom-shadow w-52 origin-top-right space-y-1 rounded-lg border border-gray-200 bg-white p-2 text-sm font-medium text-gray-700 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                >
                  <MenuItem>
                    <button className="group flex w-full cursor-pointer items-center gap-2 rounded-[4px] py-2 pr-6 pl-2 data-focus:bg-gray-100">
                      <FileDownload03Icon className="h-5 w-5 text-black" />
                      Download Invoice
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button className="group flex w-full cursor-pointer items-center gap-2 rounded-[4px] py-2 pr-6 pl-2 data-focus:bg-gray-100">
                      <Copy03Icon className="h-5 w-5 text-black" />
                      Duplicate Invoice
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button className="group flex w-full cursor-pointer items-center gap-2 rounded-[4px] py-2 pr-6 pl-2 data-focus:bg-gray-100">
                      <Trash02Icon className="h-5 w-5 text-black" />
                      Delete Invoice
                    </button>
                  </MenuItem>
                  <hr className="mt-2 border-gray-200" />
                  <MenuItem>
                    <button className="group flex w-full cursor-pointer items-center gap-2 rounded-[4px] py-2 pr-6 pl-2 data-focus:bg-gray-100">
                      <FlipBackwardIcon className="h-5 w-5 text-black" />
                      Mark as unpaid
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-6 border-t border-gray-200 px-5 py-6">
            <div className="flex items-center gap-4 border-r border-gray-300">
              <BankNote01Icon className="h-6 w-6 text-blue-500" />
              <div className="">
                <p className="text-xs font-normal text-gray-600">Amount to Pay</p>
                <p className="mt-1 text-xs font-semibold text-gray-900">AED 2,100</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-r border-gray-300">
              <CalendarDateIcon className="h-6 w-6 text-green-500" />
              <div className="">
                <p className="text-xs font-normal text-gray-600">Payment Date</p>
                <p className="mt-1 text-xs font-semibold text-gray-900">28 Sept 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CoinsHandIcon className="h-6 w-6 text-green-500" />
              <div className="">
                <p className="text-xs font-normal text-gray-600">Payment Method</p>
                <p className="mt-1 text-xs font-semibold text-gray-900">Card</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 p-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-gray-900">Invoice Details</h3>
              <button
                type="button"
                className="text-primary-600 text-xs font-semibold underline"
              >
                Edit
              </button>
            </div>
            <form className="mt-6 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <Field className={"flex flex-col"}>
                  <Label className="text-base font-medium text-gray-700">Invoice Type</Label>
                  <Input
                    className={`mt-2 h-10 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-base placeholder:text-gray-500`}
                    placeholder="Invoice Type"
                    disabled
                  />
                </Field>
                <Field className={"flex flex-col"}>
                  <Label className="text-base font-medium text-gray-700">Invoice ID</Label>
                  <Input
                    className={`mt-2 h-10 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-base placeholder:text-gray-500`}
                    placeholder="12345"
                    disabled
                  />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Field className={"flex flex-col"}>
                  <Label className="text-base font-medium text-gray-700">First Name</Label>
                  <Input
                    className={`mt-2 h-10 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-base placeholder:text-gray-500`}
                    placeholder="Abdulkarim"
                    disabled
                  />
                </Field>
                <Field className={"flex flex-col"}>
                  <Label className="text-base font-medium text-gray-700">Last Name</Label>
                  <Input
                    className={`mt-2 h-10 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-base placeholder:text-gray-500`}
                    placeholder="Ogaji"
                    disabled
                  />
                </Field>
              </div>
              <div className="">
                <Field className={"flex max-w-md flex-col"}>
                  <Label className="text-base font-medium text-gray-700">Amount</Label>
                  <div className="mt-2 flex h-10 items-center rounded-lg border border-gray-300 bg-gray-100">
                    <span className="border-r border-gray-300 px-3 py-2 text-gray-500">AED</span>
                    <Input
                      type="number"
                      className={`px-3 py-2 text-base placeholder:text-gray-500`}
                      placeholder="Enter Amount"
                      disabled
                    />
                  </div>
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Field className={"flex flex-col"}>
                  <Label className="text-base font-medium text-gray-700">From</Label>
                  <Input
                    type="date"
                    className={`mt-2 h-10 rounded-lg border border-gray-300 px-3 py-2 text-base placeholder:text-gray-500 disabled:bg-gray-100`}
                    placeholder="Abdulkarim"
                    disabled
                  />
                </Field>
                <Field className={"flex flex-col"}>
                  <Label className="text-base font-medium text-gray-700">Until</Label>
                  <Input
                    type="date"
                    className={`mt-2 h-10 rounded-lg border border-gray-300 px-3 py-2 text-base placeholder:text-gray-500 disabled:bg-gray-100`}
                    placeholder="Ogaji"
                    disabled
                  />
                </Field>
              </div>
              <div className="">
                <Field className={"flex max-w-md flex-col"}>
                  <Label className="text-base font-medium text-gray-700">Issue Date</Label>
                  <Input
                    type="date"
                    className={`mt-2 h-10 rounded-lg border border-gray-300 px-3 py-2 text-base placeholder:text-gray-500 disabled:bg-gray-100`}
                    placeholder="Abdulkarim"
                    disabled
                  />
                </Field>
              </div>
              <hr className="border-gray-200" />
              <div className="">
                <Field className={"flex max-w-md flex-col"}>
                  <Label className="text-base font-medium text-gray-700">Comments</Label>
                  <Textarea
                    className={`mt-2 h-10 rounded-lg border border-gray-300 px-3 py-2 text-base placeholder:text-gray-500 disabled:bg-gray-100`}
                    rows={5}
                    placeholder="Enter Comment"
                  />
                </Field>
              </div>
            </form>
          </div>
        </div>
        <InvoiceActivity />
      </div>
    </div>
  );
}
