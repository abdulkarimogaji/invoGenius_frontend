import { ClockRewindIcon, CoinsHandIcon, Copy03Icon, DotsVerticalIcon, FileDownload03Icon, FlipBackwardIcon, Trash02Icon } from "@/components/Icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function InvoiceActivity() {
  return (
    <div className="flex flex-col rounded-t-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between gap-6 rounded-t-xl border-b border-gray-200 p-5">
        <div className="flex items-center gap-4">
          <div className="rounded-circle bg-primary-100/40 flex h-14 w-14 items-center justify-center">
            <ClockRewindIcon className="text-primary-600 h-6 w-6" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Invoice Activity</h2>
        </div>
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
      <div className="space-y-4 bg-gray-50 p-4">
        <div className="">
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
              <div className="rounded-circle flex h-8 w-8 items-center justify-center bg-green-100">
                <CoinsHandIcon className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-grow border border-gray-200"></div>
            </div>
            <div className="w-full pb-2">
              <p className="text-[10px] font-semibold text-green-700">
                28 Sept 2023 <span className="ml-1 font-normal">11:03am</span>
              </p>
              <div className="mt-2 rounded-lg border border-green-500 bg-green-50 px-4 py-2">
                <div className="flex items-center gap-2 border-b border-green-500 pr-4 pb-2">
                  <img
                    src="/default.png"
                    alt=""
                    className="rounded-circle h-8 w-8"
                  />
                  <div className="">
                    <p className="text-xs font-semibold text-gray-900">Abdulkarim Ogaji</p>
                    <p className="text-xs font-normal">Student</p>
                  </div>
                </div>
                <p className="mt-2 text-xs font-semibold text-gray-900">Paid Invoice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
