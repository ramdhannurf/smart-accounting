"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

function ListLink({ href, children }: { href: string, children: React.ReactNode }) {
    return <Link href={href} className="w-full text-sm p-2 rounded-md hover:bg-muted">{children}</Link>
}

function DropdownButton({ title, children, className = "", variant = "default" }: { title: string, children: React.ReactNode, className?: string, variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined }) {
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className={cn(className)} variant={variant}>
                        <div className="flex gap-1">
                            <div>
                                {title}
                            </div>
                            <div className="self-center">
                                <ChevronDown size={18} />
                            </div>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-3">
                    <div className="flex flex-col gap-2">
                        {children}
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}
DropdownButton.Link = ListLink;
export default DropdownButton;