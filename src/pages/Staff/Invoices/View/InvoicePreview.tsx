import { Copy03Icon, DotsVerticalIcon, FileDownload03Icon, FileSearch03Icon, FlipBackwardIcon, Trash02Icon } from "@/components/Icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function InvoicePreview() {
  return (
    <div className="flex flex-col rounded-t-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between gap-6 rounded-t-xl border-b border-gray-200 p-5">
        <div className="flex items-center gap-4">
          <div className="rounded-circle bg-primary-100/40 flex h-14 w-14 items-center justify-center">
            <FileSearch03Icon className="text-primary-600 h-6 w-6" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Invoice Preview</h2>
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
      <div className="flex flex-grow flex-col p-10">
        <div className="custom-shadow flex-grow rounded-lg border border-gray-200 bg-white"></div>
        <div className="mt-10 flex justify-center">
          <button className="cursor-pointer rounded-lg border border-gray-300 px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-50">Download Invoice</button>
        </div>
      </div>
    </div>
  );
}
