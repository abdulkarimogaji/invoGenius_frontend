export const INVOICE_STATUSES = {
  PENDING: "pending",
  UNPAID: "unpaid",
  OVERDUE: "overdue",
  PAID: "paid",
  PARTIALLY_PAID: "partially_paid",
  OVERPAID: "overpaid",
  CANCELLED: "cancelled",
  REFUNDED: "refunded",
  CREDIT_NOTE: "credit_note",
};

export const CUSTOMER_STATUSES = {
  ACTIVE: "active",
  INACTIVE: "inactive",
};

export type UserStatusType = "staff" | "customer";
