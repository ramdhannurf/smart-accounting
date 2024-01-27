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
    nomor?: string,
    keterangan?: string,
    kredit?: string
    subtitle?: string
    saldo?: string,
    bold?: boolean
}

type FooterType = {
    label: string,
    amount: string,
    kredit?: string
    danger: boolean,
    saldo?: string
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

const data_general_ledge: Array<DataJournalType> = [
    {
        label: "(1-1001) Rekening Bank",
        data: [
            {
                account: "Saldo Awal",
                amount: "",
                date: "14-01-2024",
                kredit: "",
                subtitle: "",
                keterangan: "",
                saldo: "220.000.000,00",
                nomor: "",
                bold: true
            },
            {
                account: "Receive Payment",
                amount: "9.000.000,00",
                date: "14-01-2024",
                kredit: "",
                subtitle: "",
                keterangan: "Invoice #10054; Invoice #10042; Invoice #10032",
                saldo: "229.000.000,00",
                nomor: "10011"
            }
        ],
        footer: [
            {
                label: "(Rekening Bank) | Current Balance",
                amount: "Rp. 9.000.000,00",
                danger: false,
                kredit: "Rp. 0,00",
                saldo: "229.000.000,00"
            }
        ]
    },
    {
        label: "(1-1200) Piutang Usaha",
        data: [
            {
                account: "Saldo Awal",
                amount: "",
                date: "11-01-2024",
                kredit: "",
                subtitle: "",
                keterangan: "",
                saldo: "298.000.000,00",
                nomor: "",
                bold: true
            },
            {
                account: "Receive Payment",
                amount: "1.000.000,00",
                date: "12-01-2024",
                kredit: "",
                subtitle: "",
                keterangan: "Invoice #10064; Invoice #10072; Invoice #100122",
                saldo: "297.000.000,00",
                nomor: "10011"
            }
        ],
        footer: [
            {
                label: "(Piutang Usaha) | Current Balance",
                amount: "Rp. 9.000.000,00",
                danger: false,
                kredit: "Rp. 14.000.000,00",
                saldo: "297.000.000,00"
            }
        ]
    }
]


export default function GeneralLedgerTable() {
    return (
        <Table className="border">
            <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                    <TableHead className="w-[10rem] text-white">Nama Akun / Tanggal</TableHead>
                    <TableHead className="text-white">Transaksi</TableHead>
                    <TableHead className="text-white">Nomor</TableHead>
                    <TableHead className="text-white">Keterangan</TableHead>
                    <TableHead className="text-white">Debit</TableHead>
                    <TableHead className="text-white">Kredit</TableHead>
                    <TableHead className="text-white">Saldo</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data_general_ledge.map((el, i: number) => {
                        return <>
                            <TableRow key={i}>
                                <TableCell colSpan={3} className="!font-bold text-md">{el.label}</TableCell>
                            </TableRow>

                            {
                                el.data.map((el, i2: number) => {
                                    return <>
                                        <TableRow>
                                            <TableCell className="font-medium border-l py-4" key={i2}>{el.date}</TableCell>
                                            {
                                                el.bold ? <TableCell className="border-l py-4 font-semibold" key={i2}>{el.account}</TableCell> : <TableCell className="border-l py-4" key={i2}>{el.account}</TableCell>
                                            }
                                            <TableCell className="border-l py-4" key={i2}>{el.nomor}</TableCell>
                                            <TableCell className="border-l py-4" key={i2}>{el.keterangan}</TableCell>
                                            <TableCell className="border-l py-4" key={i2}>{el.amount}</TableCell>
                                            <TableCell className="border-l py-4" key={i2}>{el.kredit}</TableCell>
                                            <TableCell className="border-l py-4" key={i2}>{el.saldo}</TableCell>
                                        </TableRow>
                                    </>

                                })
                            }
                            {
                                el.footer.map((el, i3: number) => {
                                    return <TableRow style={{ backgroundColor: el.danger ? "rgba(251, 116, 156, 0.31)" : "#f8f8f8" }} key={i3}>
                                        <TableCell className="font-medium text-center border-y border-[#000]" colSpan={4} key={i3}>{el.label}</TableCell>
                                        <TableCell className="font-medium border-y border-[#000]" key={i3}>{el.amount}</TableCell>
                                        <TableCell className="font-medium border-y border-[#000]" key={i3}>{el.kredit}</TableCell>
                                        <TableCell className="font-medium border-y border-[#000]" key={i3}>{el.saldo}</TableCell>
                                    </TableRow>
                                })
                            }
                        </>
                    })
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell className="text-md font-bold text-end" colSpan={4}>Grand Total</TableCell>
                    <TableCell className="text-md font-bold text-end">Rp. 2,500.00</TableCell>
                    <TableCell className="text-md font-bold text-end">Rp. 2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}