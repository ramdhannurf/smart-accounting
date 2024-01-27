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
    date: string
}

type FooterType = {
    label: string,
    amount: string,
    danger: boolean
}

type TotalAmmount = {
    pendapatan_bersih: string,
    total_komprehensif: string
}

type DataProfitLossType = {
    label: string,
    data: Array<DataAmountType>,
    footer: Array<FooterType>,
}

const data_profit_loss: Array<DataProfitLossType> = [
    {
        label: "Pendapatan dari Penjualan",
        data: [
            {
                account: "(4-40000) Penjualan",
                amount: "Rp. 314.000.000,00",
                date: "14-01-2024"
            }
        ],
        footer: [
            {
                label: "Total Pendapatan Dari Penjualan",
                amount: "Rp. 314.000.000,00",
                danger: false,
            }
        ]
    },
    {
        label: "Harga Pokok Penjualan",
        data: [
            {
                account: "(4-40000) Harga Pokok Penjualan (COGS)",
                amount: "Rp. 151.000.000,00",
                date: "14-01-2024"
            }
        ],
        footer: [
            {
                label: "Total Harga Pokok Penjualan",
                danger: true,
                amount: "Rp. 151.000.000,00"
            },
            {
                label: "Laba Kotor",
                danger: false,
                amount: "Rp. 162.000.000,00"
            }
        ]
    }
]

export function TableProfitLoss() {
    return (
        <Table className="border">
            <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                    <TableHead className="w-[110px] text-white">Tanggal</TableHead>
                    <TableHead className="text-white">Pendapatan</TableHead>
                    <TableHead className="text-white">Jumlah</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data_profit_loss.map((el, i: number) => {
                        return <>
                            <TableRow key={i}>
                                <TableCell colSpan={3} className="!font-bold text-md">{el.label}</TableCell>
                            </TableRow>
                            <TableRow>
                                {
                                    el.data.map((el, i2: number) => {
                                        return <>
                                            <TableCell className="py-4" key={i2}>{el.date}</TableCell>
                                            <TableCell className="font-medium border-l py-4" key={i2}>
                                                <Link href={'/dashboard/list_account/detail'} className="text-primary hover:underline">
                                                    {el.account}
                                                </Link>
                                            </TableCell>
                                            <TableCell className="border-l py-4" key={i2}>{el.amount}</TableCell>
                                        </>
                                    })
                                }
                            </TableRow>
                            {
                                el.footer.map((el, i3: number) => {
                                    return <TableRow style={{ backgroundColor: el.danger ? "rgba(251, 116, 156, 0.31)" : "" }} key={i3}>
                                        <TableCell colSpan={2} className="font-medium" key={i3}>{el.label}</TableCell>
                                        <TableCell colSpan={2} className="font-medium" key={i3}>{el.amount}</TableCell>
                                    </TableRow>
                                })
                            }
                        </>
                    })
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2} className="text-md font-semibold">Pendapatan Bersih</TableCell>
                    <TableCell className="text-right text-md font-semibold">Rp. 2,500.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2} className="text-md font-semibold">Total Pendapatan Komprehensif untuk periode ini</TableCell>
                    <TableCell className="text-right text-md font-semibold">Rp. 2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
