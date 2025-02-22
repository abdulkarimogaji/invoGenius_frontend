import { Button, Field, Fieldset, Input, Label } from "@headlessui/react";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="grid h-screen grid-cols-[1fr_1.5fr] items-center">
      <div className="flex h-full flex-col items-center justify-between">
        <div></div>
        <div className="w-full max-w-sm">
          <form>
            <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
            <Fieldset>
              <Field className={"mt-6"}>
                <Label className="text-sm font-medium text-gray-700">Name</Label>
                <Input
                  className={`mt-1.5 w-full rounded-lg border border-gray-300 p-2 px-4 py-2 font-normal ring-lime-600 duration-100 outline-none focus-within:border-transparent focus-within:ring-2 focus-within:outline-none`}
                />
              </Field>
              <Field className={"mt-6"}>
                <Label className="text-sm font-medium text-gray-700">Password</Label>
                <Input
                  className={`mt-1.5 w-full rounded-lg border border-gray-300 p-2 px-4 py-2 font-normal ring-lime-600 duration-100 outline-none focus-within:border-transparent focus-within:ring-2 focus-within:outline-none`}
                />
                <Link
                  to={"/forgot-password"}
                  className="mt-1 text-sm font-semibold text-lime-600"
                >
                  Forgot password
                </Link>
              </Field>
            </Fieldset>
            <Button
              type="submit"
              className={"mt-6 w-full cursor-pointer rounded-lg bg-lime-600 py-2.5 font-semibold text-white"}
            >
              Login
            </Button>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex-grow border border-gray-200" />
              <p className="text-sm font-medium text-gray-500">OR</p>
              <div className="flex-grow border border-gray-200" />
            </div>
          </form>
        </div>
        <div></div>
      </div>
      <div className="login-image h-full" />
    </div>
  );
}
