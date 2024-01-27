import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AdminAuthForm } from "./AdminAuthForm";

export default function LoginAdminPage() {
    return (
        <>
            <div className="container relative h-screen flex-col items-center justify-center grid place-content-center">
                {/* <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link> */}
                <div className="p-10">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Sign In
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Masukan Email dan Password untuk Masuk
                            </p>
                        </div>
                        <AdminAuthForm />
                    </div>
                </div>
            </div>
        </>
    )
}