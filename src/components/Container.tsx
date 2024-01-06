import { cn } from "@/lib/utils";

export default function Container({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <>
            <div className={cn("container mx-auto xl:py-20 py-20 flex flex-col gap-10 px-7 xl:p-0", className)}>
                {children}
            </div>
        </>
    )
}