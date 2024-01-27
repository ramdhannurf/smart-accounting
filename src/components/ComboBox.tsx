"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function ComboBox({ select, placeholder, search, name, disabled = false }: { select: Array<{ title: string, value: string }>, placeholder: string, search: string, name: string, disabled?: boolean }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("");

    React.useEffect(() => {
        console.log(value)
        console.log(select.find((framework) => framework.value === value)?.title);
    }, [value]);

    return (
        <div className="w-full">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between" disabled={disabled}
                    >
                        {value
                            ? select.find((framework) => framework.value === value)?.title
                            : placeholder}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 !h-max-[300px]" align="start">
                    <Command className="!h-[300px] ">
                        <CommandInput placeholder={search} className="h-9" />
                        <CommandEmpty>No {name} found.</CommandEmpty>
                        <CommandGroup className="!overflow-y-auto">
                            {select.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {framework.title}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
