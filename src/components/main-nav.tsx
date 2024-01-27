"use client"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Banknote, Coins, Maximize, Minimize, ShoppingBasket } from "lucide-react"
import Cookies from 'js-cookie';
import { useState } from "react"


export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    return (
        <nav
            className={cn("flex items-center space-x-4", className, "")}
            {...props}
        >

            <Link
                href="/dashboard/sales/add/sales_billing"
                className="text-sm font-medium transition-colors hover:text-primary hidden 2xl:block xl:block md:block"
            >
                <Button variant={'outline'}><Coins className="mr-2 h-4 w-4" /> Jual</Button>
            </Link>
            <Link
                href="/dashboard/purchase/add/purchase_invoice"
                className="text-sm font-medium transition-colors hover:text-primary hidden 2xl:block xl:block md:block"
            >
                <Button variant={'outline'}><ShoppingBasket className="mr-2 h-4 w-4" /> Beli</Button>
            </Link>
            <Link
                href="/dashboard/budget/add"
                className="text-sm font-medium transition-colors hover:text-primary hidden 2xl:block xl:block md:block"
            >
                <Button variant={'outline'}><Banknote className="mr-2 h-4 w-4" /> Biaya</Button>
            </Link>

        </nav>
    )
}