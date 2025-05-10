import { CheckCircleIcon, ClockIcon, CoinsStacked02Icon, CoinsSwap02Icon, Contrast01Icon, ReceiptCheckIcon, SlashCircle1Icon, XCircleIcon } from "@/components/Icons";
import { INVOICE_STATUSES } from "@/utils/mappings";

export const STATUSES = {
  [INVOICE_STATUSES.PENDING]: (
    <div className="flex items-center gap-1 rounded-2xl bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700">
      <ClockIcon className="h-5 w-5 text-gray-600" />
      Pending
    </div>
  ),
  [INVOICE_STATUSES.CANCELLED]: (
    <div className="flex items-center gap-1 rounded-2xl bg-white px-1.5 py-0.5 text-xs font-medium text-red-700">
      <SlashCircle1Icon className="h-5 w-5 text-red-600" />
      Cancelled
    </div>
  ),
  [INVOICE_STATUSES.UNPAID]: (
    <div className="flex items-center gap-1 rounded-2xl bg-orange-50 px-1.5 py-0.5 text-xs font-medium text-orange-700">
      <XCircleIcon className="h-5 w-5 text-orange-600" />
      Unpaid
    </div>
  ),
  [INVOICE_STATUSES.PAID]: (
    <div className="flex items-center gap-1 rounded-2xl bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700">
      <CheckCircleIcon className="h-5 w-5 text-green-600" />
      Paid
    </div>
  ),
  [INVOICE_STATUSES.CREDIT_NOTE]: (
    <div className="flex items-center gap-1 rounded-2xl bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700">
      <ReceiptCheckIcon className="h-5 w-5 text-gray-600" />
      Credit note
    </div>
  ),
  [INVOICE_STATUSES.REFUNDED]: (
    <div className="flex items-center gap-1 rounded-2xl bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700">
      <CoinsSwap02Icon className="h-5 w-5 text-red-600" />
      Refunded
    </div>
  ),
  [INVOICE_STATUSES.OVERPAID]: (
    <div className="flex items-center gap-1 rounded-2xl bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700">
      <CoinsStacked02Icon className="h-5 w-5 text-blue-600" />
      Overpaid
    </div>
  ),
  [INVOICE_STATUSES.PARTIALLY_PAID]: (
    <div className="flex items-center gap-1 rounded-2xl bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700">
      <Contrast01Icon className="h-5 w-5 text-gray-600" />
      Partially paid
    </div>
  ),
};
