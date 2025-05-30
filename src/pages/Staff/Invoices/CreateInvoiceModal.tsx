import { SelectCustomer, SelectInput } from "@/components";
import { XCloseIcon } from "@/components/Icons";
import InvoSDK from "@/utils/InvoSDK";
import { Button, Dialog, DialogPanel, DialogTitle, Field, Fieldset, Input, Label } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import useCustomers from "../Customers/useCustomers";
import useInvoiceSettings from "./useInvoiceSettings";
import moment from "moment";

const invoiceTypes = [
  {
    label: "Standard",
    value: "standard",
  },
  {
    label: "Sales",
    value: "sales",
  },
  {
    label: "Deposit",
    value: "deposit",
  },
  {
    label: "Tax Invoice",
    value: "tax_invoice",
  },
  {
    label: "Internal Invoice",
    value: "internal",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export default function CreateInvoiceModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) {
  const navigate = useNavigate();
  const { customers } = useCustomers({}, {});
  const { settings } = useInvoiceSettings();

  const schema = yup
    .object({
      user_id: yup.string().required("Please select a customer"),
      type: yup.string().required("This field is required"),
      other_type: yup.string().when("type", ([type]) => {
        if (type === "Other") {
          return yup.string().required("Enter invoice type");
        }
        return yup.string();
      }),
      from_date: yup.string().required("This field is required"),
      until_date: yup.string().required("This field is required"),
      deadline: yup.string(),
      issued_at: yup.string().required("This field is required"),
      amount: yup
        .number()
        .transform((value) => (isNaN(value) ? null : value))
        .nullable()
        .required("This field is required")
        .positive("Must be positive"),
      comments: yup.string(),
    })
    .required();

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
      const sdk = new InvoSDK();
      const response = await sdk.callRawAPI("/v1/api/invoices", "post", {
        user_id: Number(data.user_id),
        amount: data.amount,
        from_date: data.from_date,
        until_date: data.until_date,
        issued_at: data.issued_at,
        type: data.type === "Other" ? data.other_type : data.type,
        deadline: data.deadline || null,
      });
      navigate(`/invoices/${response.invoice_id}`);
    } catch (err: any) {
      // throw err;
      setError("root", { message: err.message });
    }
  }

  const [type, issued_at] = watch(["type", "issued_at"]);

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-white/75">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="custom-shadow w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <div className="flex items-center justify-between p-2">
              <DialogTitle
                as="h3"
                className="text-lg font-semibold text-gray-900"
              >
                Create Invoice
              </DialogTitle>
              <button
                type="button"
                className="cursor-pointer"
                onClick={closeModal}
              >
                <XCloseIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-96 overflow-y-auto px-2"
            >
              <Fieldset>
                <Field className={"mt-4"}>
                  <Label className="text-sm font-medium text-gray-700">Payee</Label>
                  <div className="mt-1.5"></div>
                  <SelectCustomer
                    customers={customers}
                    control={control}
                    name="user_id"
                  />
                  <p className="text-xs text-red-600 empty:hidden">{errors.user_id?.message}</p>
                </Field>
                <Field className={"mt-6"}>
                  <Label className="text-sm font-medium text-gray-700">Invoice Type</Label>
                  <div className="mt-1.5"></div>
                  <SelectInput
                    options={invoiceTypes}
                    control={control}
                    name="type"
                  />
                  <p className="text-xs text-red-600 empty:hidden">{errors.type?.message}</p>
                </Field>
                {type === "Other" ? (
                  <Field className={"mt-6"}>
                    <Label className="text-sm font-medium text-gray-700">Enter Invoice Type</Label>
                    <Input
                      type="text"
                      className={`ring-primary-600 mt-1.5 w-full rounded-lg border border-gray-300 p-2 px-4 py-2 font-normal duration-100 outline-none focus-within:border-transparent focus-within:ring-2 focus-within:outline-none`}
                      {...register("other_type")}
                    />
                    <p className="text-xs text-red-600 empty:hidden">{errors.other_type?.message}</p>
                  </Field>
                ) : null}

                <Field className={"mt-6"}>
                  <Label className="text-sm font-medium text-gray-700">Amount</Label>
                  <div
                    className={`mt-1.5 flex gap-2 rounded-md border border-gray-300 font-normal duration-100 focus-within:border-transparent focus-within:ring-2 ${
                      errors.amount?.message ? "ring-red-500" : "ring-primary-600"
                    }`}
                  >
                    <div className="border-r border-gray-200 px-3 pt-2 text-gray-600">{settings?.currency}</div>
                    <Input
                      type="number"
                      {...register("amount")}
                      className={"remove-arrow w-32 flex-grow rounded-r-lg px-2 py-1.5 focus:outline-none"}
                    />
                  </div>
                  <p className="text-xs text-red-600 empty:hidden">{errors.amount?.message}</p>
                </Field>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <Field>
                    <Label className="text-sm font-medium text-gray-700">From Date</Label>
                    <Input
                      type="date"
                      className={`ring-primary-600 mt-1.5 w-full rounded-lg border border-gray-300 p-2 px-4 py-2 font-normal duration-100 outline-none focus-within:border-transparent focus-within:ring-2 focus-within:outline-none`}
                      {...register("from_date")}
                    />
                    <p className="text-xs text-red-600 empty:hidden">{errors.from_date?.message}</p>
                  </Field>
                  <Field>
                    <Label className="text-sm font-medium text-gray-700">Until Date</Label>
                    <Input
                      type="date"
                      className={`ring-primary-600 mt-1.5 w-full rounded-lg border border-gray-300 p-2 px-4 py-2 font-normal duration-100 outline-none focus-within:border-transparent focus-within:ring-2 focus-within:outline-none`}
                      {...register("until_date")}
                    />
                    <p className="text-xs text-red-600 empty:hidden">{errors.until_date?.message}</p>
                  </Field>
                </div>
                <Field className={"mt-6"}>
                  <Label className="text-sm font-medium text-gray-700">Issued At</Label>
                  <Input
                    type="date"
                    className={`ring-primary-600 mt-1.5 w-full rounded-lg border border-gray-300 p-2 px-4 py-2 font-normal duration-100 outline-none focus-within:border-transparent focus-within:ring-2 focus-within:outline-none`}
                    {...register("issued_at")}
                  />
                  <p className="text-xs text-red-600 empty:hidden">{errors.issued_at?.message}</p>
                </Field>
                <Field className={"group mt-6"}>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-gray-700">Due Date (optional)</Label>
                    {issued_at ? (
                      <button
                        type="button"
                        className="hidden cursor-pointer rounded-[100vw] bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700 group-hover:inline"
                        onClick={() => {
                          const deadline = moment(issued_at).add(settings?.deadline_days, "days").format("YYYY-MM-DD");
                          setValue("deadline", deadline);
                        }}
                      >
                        Use Default
                      </button>
                    ) : null}
                  </div>
                  <Input
                    type="date"
                    className={`ring-primary-600 mt-1.5 w-full rounded-lg border border-gray-300 p-2 px-4 py-2 font-normal duration-100 outline-none focus-within:border-transparent focus-within:ring-2 focus-within:outline-none`}
                    {...register("deadline")}
                  />
                  <p className="text-xs text-red-600 empty:hidden">{errors.deadline?.message}</p>
                </Field>
              </Fieldset>
              <Button
                className="bg-primary-600 mt-6 w-full cursor-pointer rounded-lg px-3 py-2 font-semibold text-white hover:opacity-90 active:opacity-95"
                type="submit"
              >
                Create Invoice
              </Button>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
