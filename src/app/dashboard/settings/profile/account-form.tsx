"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "sonner"
import { useState } from "react"
import { switchLocaleAction } from "@/i18n/actions/switch-locale"

const languages = [
    { label: "Indonesia", value: "id" },
    { label: "English", value: "en" },

] as const

const accountFormSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    language: z.string({
        required_error: "Please select a language.",
    }),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    // name: "Your name",
    // dob: new Date("2023-01-23"),
}

export function AccountForm() {
    const form = useForm<AccountFormValues>({
        resolver: zodResolver(accountFormSchema),
        defaultValues,
    })

    const [set_language, setLanguage] = useState({ value: "", label: "" });

    const onSubmit = () => {

    }

    const handleLocaleChange = (event: string) => {
        switchLocaleAction(event);
        window.location.reload();
    };

    return (
        <div className="px-1">
            <div className="my-6 flex gap-8">
                <div>
                    <img src="https://avatars.githubusercontent.com/u/124599?v=4" className="max-w-[150px] w-full rounded-full" alt="" />
                </div>
                <div className="flex flex-col gap-2 max-w-[300px] w-full self-center">
                    <Button size={"sm"} className="w-full">Ubah</Button>
                    <Button variant={"outline"} size={"sm"} className="w-full">Hapus</Button>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama lengkap</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nama anda" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Nama ini adalah nama akun anda pribadi.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input value={"weeeeworks@gmail.com"} disabled />
                                </FormControl>
                                <FormDescription>
                                    Anda tidak bisa mengubah email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nomor Telepon</FormLabel>
                                <FormControl>
                                    <Input value={"0899823123"} type="number" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* <FormField
                        control={form.control}
                        name="language"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Bahasa</FormLabel>
                                
                                <FormDescription>
                                    Ini adalah bahasa yang akan digunakan di dashboard.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                    <div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            "w-[200px] justify-between",
                                            !set_language.value && "text-muted-foreground"
                                        )}
                                    >
                                        {set_language.value
                                            ? languages.find(
                                                (language) => language.value === set_language.value
                                            )?.label
                                            : "Pilih bahasa"}
                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search language..." />
                                    <CommandEmpty>No language found.</CommandEmpty>
                                    <CommandGroup>
                                        {languages.map((language) => (
                                            <CommandItem
                                                value={language.label}
                                                key={language.value}
                                                onSelect={() => {
                                                    setLanguage({ label: language.label, value: language.value })
                                                    handleLocaleChange(language.value)
                                                }}
                                            >
                                                <CheckIcon
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        language.value === set_language.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                {language.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <Button type="submit">Ubah profile</Button>
                </form>
            </Form>
        </div>
    )
}