"use client"
import Link from "next/link"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useState } from "react"
import NewPerusahaan from "./NewPerusahaan"

export function UserNav() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" alt="@shadcn" />
                            <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">Alicia Koch</p>
                            <p className="text-xs leading-none text-muted-foreground">
                                m@example.com
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <Link href={"/dashboard/settings/profile"}>
                            <DropdownMenuItem className="cursor-pointer">
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link href={"/dashboard/settings/billing"}>
                            <DropdownMenuItem className="cursor-pointer">
                                Tagihan
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link href={"/dashboard/settings"}>
                            <DropdownMenuItem className="cursor-pointer">
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem className="cursor-pointer" onClick={() => setOpen(true)}>Buat Perusahaan</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <Link href={"/auth/login"}>
                        <DropdownMenuItem className="cursor-pointer">
                            Log out
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
            <NewPerusahaan open={open} setOpen={setOpen} />
        </>
    )
}