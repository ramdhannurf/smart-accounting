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

type DataCashflowType = {
    label: string,
    amount: string,
    expense: boolean
}

type FooterCashflowType = {
    label: string,
    amount: string,
}

interface CashflowTableType {
    label: string,
    data: Array<DataCashflowType>,
    footer: Array<FooterCashflowType>,
}

const data_cashflow: Array<CashflowTableType> = [
    {
        label: "Arus kas dari Aktivitas Operasional",
        data: [
            {
                label: "Penerima dari pelanggan",
                amount: "219.000.000,00",
                expense: false
            },
            {
                label: "Aset lancar lainnya",
                amount: "(65.000.000,00)",
                expense: true
            },
            {
                label: "Pembayaran ke pamasok",
                amount: "(107.000.000,00)",
                expense: true
            },
            {
                label: "Kartu keredit dan liabilitas jangka pendek lainnya",
                amount: "55.000.000,00",
                expense: false
            },
            {
                label: "Pendapatan Lainnya",
                amount: "0,00",
                expense: false
            },
            {
                label: "Pengeluaran operasional",
                amount: "(16.000.000,00)",
                expense: true
            }
        ],
        footer: [
            {
                label: "Kas bersih yang diperoleh dari Aktivitas Operasional",
                amount: "85.000.000,00"
            }
        ]
    }
]

export default function CashFlowTable() {
    return (
        <>
            <Table className="border">
                <TableHeader>
                    <TableRow className="bg-primary hover:bg-primary">
                        <TableHead className="w-[30rem] text-white text-start">Akun & Kategori</TableHead>
                        <TableHead className="text-white text-end">10/01/2024 - 20/01/2024</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data_cashflow.map((el, i: number) => {
                            return <>
                                <TableRow key={i}>
                                    <TableCell colSpan={2} className="!font-bold text-md">{el.label}</TableCell>
                                </TableRow>
                                {
                                    el.data.map((el, i: number) => {
                                        return <TableRow key={i}>
                                            <TableCell className="font-medium border-l py-4">{el.label}</TableCell>
                                            <TableCell className="font-medium text-end border-l py-4">{
                                                el.expense ? `-${el.amount}` : el.amount
                                            }</TableCell>
                                        </TableRow>
                                    })
                                }
                                {
                                    el.footer.map((el, i: number) => {
                                        return <TableRow key={i}>
                                            <TableCell className="font-bold border-y border-[#000] py-4">{el.label}</TableCell>
                                            <TableCell className="font-bold text-end border-y border-[#000] py-4">{el.amount}</TableCell>
                                        </TableRow>
                                    })
                                }
                            </>
                        })
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell className="text-md font-bold ">Kenaikan (penuruan) Kas</TableCell>
                        <TableCell className="text-md font-bold text-end">Rp. 2,500.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-md font-bold ">Total revaluasi bank</TableCell>
                        <TableCell className="text-md font-bold text-end">Rp. 2,500.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-md font-bold ">Saldo kas awal</TableCell>
                        <TableCell className="text-md font-bold text-end">Rp. 2,500.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-md font-bold ">Saldo kas akhir</TableCell>
                        <TableCell className="text-md font-bold text-end">Rp. 2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    )
}