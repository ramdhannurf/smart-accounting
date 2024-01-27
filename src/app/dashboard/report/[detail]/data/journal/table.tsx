import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"

type DataAmountType = {
    account: string,
    amount: string,
    date: string,
    kredit?: string
    subtitle?: string
}

type FooterType = {
    label: string,
    amount: string,
    kredit?: string
    danger: boolean
}

type TotalAmmount = {
    pendapatan_bersih: string,
    total_komprehensif: string
}

type DataJournalType = {
    label: string,
    data: Array<DataAmountType>,
    footer: Array<FooterType>,
}

const data_profit_loss: Array<DataJournalType> = [
    {
        label: "Invoice #10008 | 18/01/2024",
        data: [
            {
                account: "(4-40000) Piutang Usaha",
                amount: "Rp. 16.000.000,00",
                date: "14-01-2024",
                kredit: "Rp. 0,00",
                subtitle: "",
            },
            {
                account: "(4-40000) Harga Pokok Penjualan (COGS)",
                amount: "Rp. 11.000.000,00",
                date: "14-01-2024",
                kredit: "Rp. 0,00",
                subtitle: 'LG TV 43"'
            },
            {
                account: "(4-40000) PPN Pengeluaran",
                amount: "Rp. 0,00",
                date: "14-01-2024",
                kredit: "Rp. 1.000.000,00",
            }
        ],
        footer: [
            {
                label: "Total",
                amount: "Rp. 26.000.000,00",
                danger: false,
                kredit: "Rp. 1.000.000,00"
            }
        ]
    },
    {
        label: "Receive Payment #100007 | 10/01/2024",
        data: [
            {
                account: "(4-40000) Rekening Bank",
                amount: "Rp. 16.000.000,00",
                date: "14-01-2024",
                kredit: "Rp. 0,00"
            },
            {
                account: "(4-40000) Piutang Usaha",
                amount: "Rp. 0,00",
                date: "14-01-2024",
                kredit: "Rp. 16.000.000,00",
                subtitle: "Service Repair"
            }
        ],
        footer: [
            {
                label: "Total",
                danger: false,
                amount: "Rp. 16.000.000,00",
                kredit: "Rp. 16.000.000,00"
            }
        ]
    }
]


export default function JournalTable() {
    return (
        <Table className="border">
            <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                    <TableHead className="w-[25rem] text-white">Akun</TableHead>
                    <TableHead className="text-white">Debit</TableHead>
                    <TableHead className="text-white">Kredit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data_profit_loss.map((el, i: number) => {
                        return <>
                            <TableRow key={i}>
                                <TableCell colSpan={3} className="!font-bold text-md">{el.label}</TableCell>
                            </TableRow>

                            {
                                el.data.map((el, i2: number) => {
                                    return <>
                                        <TableRow>
                                            <TableCell className="font-medium border-l py-4" key={i2}>
                                                <Link href={'/dashboard/list_account/detail'} className="text-primary hover:underline">
                                                    <div className="flex flex-col">
                                                        <p>{el.account}</p>
                                                        <small>{el?.subtitle}</small>
                                                    </div>
                                                </Link>
                                            </TableCell>
                                            <TableCell className="border-l py-4" key={i2}>{el.amount}</TableCell>
                                            <TableCell className="border-l py-4" key={i2}>{el.kredit}</TableCell>
                                        </TableRow>
                                    </>

                                })
                            }
                            {
                                el.footer.map((el, i3: number) => {
                                    return <TableRow style={{ backgroundColor: el.danger ? "rgba(251, 116, 156, 0.31)" : "#f8f8f8" }} key={i3}>
                                        <TableCell className="font-medium" key={i3}>{el.label}</TableCell>
                                        <TableCell className="font-medium" key={i3}>{el.amount}</TableCell>
                                        <TableCell className="font-medium" key={i3}>{el.kredit}</TableCell>
                                    </TableRow>
                                })
                            }
                        </>
                    })
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell className="text-md font-semibold">Total</TableCell>
                    <TableCell className="text-md font-semibold">Rp. 2,500.00</TableCell>
                    <TableCell className="text-md font-semibold">Rp. 2,500.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-md font-semibold">Grand Total</TableCell>
                    <TableCell className="text-md font-semibold">Rp. 2,500.00</TableCell>
                    <TableCell className="text-md font-semibold">Rp. 2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}