"use client"

import * as React from "react"
import {
    CaretSortIcon,
    CheckIcon,
    PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar"
import { Button } from "./ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "./ui/command"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import Link from "next/link"
import { List, Lock, Rows3 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DrawerDialog } from "@/components/Dialog";
import { PinInput } from 'react-input-pin-code';
import { Alert, AlertDescription } from "./ui/alert"
import { toast } from "sonner"

const groups: any = [
    {
        label: "Akun Personal",
        teams: [
            {
                label: "Alicia Koch",
                value: "personal",
            },
        ],
    },
    {
        label: "Perusahaan",
        teams: [
            {
                label: "Acme Inc.",
                value: "acme-inc",
                lock: false
            },
            {
                label: "Monsters Inc.",
                value: "monsters",
                lock: true
            },
        ],
    },
]



export default function TeamSwitcher({ className }: any) {
    const [open, setOpen] = React.useState(false)
    const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)
    const [selectedTeam, setSelectedTeam] = React.useState<any>(
        groups[0].teams[0]
    )

    const [open_pin, setOpenPin] = React.useState<boolean>(false);
    const [pin, setPin] = React.useState(['', '', '', '', '']);

    React.useEffect(() => {
        if (open_pin === false) {
            setPin(['', '', '', '', ''])
        }
    }, [open_pin]);

    return (
        <>
            <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            aria-label="Select a team"
                            className={cn("2xl:w-[200px] xl:w-[200px] md:w-[200px] w-fit justify-between", className)}
                        >
                            <Avatar className="mr-2 h-5 w-5">
                                <AvatarImage
                                    src={`https://avatar.vercel.sh/${selectedTeam.value}.png`}
                                    alt={selectedTeam.label}
                                    className="grayscale"
                                />
                                <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            <span className="hidden 2xl:block xl:block md:block">{selectedTeam.label}</span>
                            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandList>
                                <CommandInput placeholder="Cari perusahaan..." />
                                <CommandEmpty>No team found.</CommandEmpty>
                                {groups.map((group: any) => (
                                    <CommandGroup key={group.label} heading={group.label}>
                                        {group.teams.map((team: any) => (
                                            <CommandItem
                                                key={team.value}
                                                onSelect={() => {
                                                    setSelectedTeam(team)
                                                    setOpen(false);
                                                    if (team.lock) {
                                                        setOpenPin(true);
                                                    }
                                                }}
                                                className="text-sm"
                                            >
                                                <Avatar className="mr-2 h-5 w-5">
                                                    <AvatarImage
                                                        src={`https://avatar.vercel.sh/${team.value}.png`}
                                                        alt={team.label}
                                                        className="grayscale"
                                                    />
                                                    <AvatarFallback>SC</AvatarFallback>
                                                </Avatar>
                                                <div className="flex gap-1 flex-wrap ">
                                                    <span className="self-center">{team.label}</span>
                                                    {
                                                        team.lock && <Lock width={14} className="text-muted-foreground" />
                                                    }
                                                </div>
                                                {
                                                    selectedTeam.value === team.value ? <p className="ml-auto text-xs text-muted-foreground ">(Active)</p> : ""
                                                }
                                                {/* // <CheckIcon
                                                //     className={cn(
                                                //         "ml-auto h-4 w-4",
                                                //         selectedTeam.value === team.value
                                                //             ? "opacity-100"
                                                //             : "opacity-0"
                                                //     )}
                                                // /> */}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                ))}
                            </CommandList>
                            <CommandSeparator />
                            <CommandList>
                                <CommandGroup>
                                    <DialogTrigger asChild>
                                        <CommandItem
                                            onSelect={() => {
                                                setOpen(false)
                                                setShowNewTeamDialog(true)
                                            }}
                                        >
                                            <Link href={"/dashboard/company"} className="flex">
                                                <List className="mr-2 h-5 w-5" />
                                                List Perusahaan
                                            </Link>
                                        </CommandItem>
                                    </DialogTrigger>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </Dialog>
            <DrawerDialog open={open_pin} setOpen={setOpenPin} title="PIN Verifikasi" desc="lorem ipsum dollar amet.">
                <div className="flex flex-col gap-5">
                    <Alert>
                        <AlertDescription>
                            <div className="flex flex-col gap-3">
                                <Label>Masukan PIN:</Label>
                                <PinInput
                                    values={pin}
                                    onChange={(value, index, values) => setPin(values)}
                                    placeholder="•"
                                    focusBorderColor="#fb6592"
                                    size="lg"
                                    autoFocus
                                    mask={true}
                                />
                                <small className="text-destructive">Percobaan 3 kali (1 menit 2 detik)</small>
                            </div>
                        </AlertDescription>
                    </Alert>
                    <div className="flex flex-col gap-2">
                        <Button onClick={() => {
                            toast.info(`PIN yang anda masukan adalah: ${pin}`, {
                                description: "Untuk fitur ini masih dalam tahap pengembangan, Ditunjukan untuk demo semata."
                            })
                        }}>Masuk</Button>
                        <Button variant={"outline"} onClick={() => setOpenPin(false)}>Batal</Button>
                    </div>
                </div>
            </DrawerDialog>
        </>
    )
}