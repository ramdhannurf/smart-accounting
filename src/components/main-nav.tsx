import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Banknote, Coins, ShoppingBasket } from "lucide-react"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4", className)}
            {...props}
        >
            <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                <Button variant={'outline'}><Coins className="mr-2 h-4 w-4" /> Jual</Button>
            </Link>
            <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                <Button variant={'outline'}><ShoppingBasket className="mr-2 h-4 w-4" /> Beli</Button>
            </Link>
            <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                <Button variant={'outline'}><Banknote className="mr-2 h-4 w-4" /> Biaya</Button>
            </Link>

        </nav>
    )
}